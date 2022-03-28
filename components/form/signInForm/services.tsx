import Router from "next/router";
import { Dispatch, SetStateAction } from "react";
import {
  ResponseAuthenticationApi,
  UserAction,
} from "../../../store/api/login/types";
import { urlApi } from "../../../store/api/variables";
import { getAuthHeader, isValidEmail } from "../../helpers";
import { BooksAction } from "../../../store/api/books/types";

export async function checkLoggedIn(
  dispatch: Dispatch<UserAction>,
  timeToRefresh: number,
  name: string,
  isProtectedPage = true,
  sendTo = "/"
) {
  const lastRefresh = localStorage.getItem("lastRefresh");
  const token = localStorage.getItem("token");
  const refreshToken = localStorage.getItem("refreshToken");

  if (token && refreshToken) {
    if (
      lastRefresh &&
      parseInt(lastRefresh) + timeToRefresh > Math.floor(Date.now() / 1000)
    ) {
      if (!isProtectedPage) {
        Router.push(sendTo);
      }
      return;
    }

    const optionsFetch = {
      method: "POST",
      headers: {
        "content-type": "application/json;charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        refreshToken,
      }),
    };

    const response = await fetch(urlApi.refreshToken, optionsFetch);

    if (response.status === 204) {
      const tokenHeader = getAuthHeader(response);
      const refreshTokenHeader = getAuthHeader(response, "refresh-token");

      dispatch({
        type: "userSuccess",
        returnMsg: "",
        token: tokenHeader,
        refreshToken: refreshTokenHeader,
        name,
      });

      if (!isProtectedPage) {
        Router.push(sendTo);
      }
    } else {
      dispatch({
        type: "userError",
        returnMsg: !isProtectedPage ? "Você foi deslogado por inatividade" : "",
        requiredFieldsErrors: {
          email: "",
          password: "",
        },
      });

      if (isProtectedPage) {
        Router.push(sendTo);
      }
    }
  } else {
    dispatch({
      type: "userError",
      returnMsg: "",
      requiredFieldsErrors: {
        email: "",
        password: "",
      },
    });

    if (isProtectedPage) {
      Router.push(sendTo);
    }
  }
}

export function validateSignInForm(
  dispatch: Dispatch<UserAction>,
  email: string,
  password: string,
  returnMsg: string
) {
  const validEmail = isValidEmail(email);
  const validPassword = password.length >= 6;

  const labelErrorEmail = !validEmail ? "Email inválido" : "";
  const labelErrorPassword = !validPassword
    ? "Senha deve ter no mínimo 6 caracteres"
    : "";
  const labelReturnMsg =
    !validEmail || !validPassword
      ? "Verifique os campos e tente novamente"
      : returnMsg;

  dispatch({
    type: "userError",
    returnMsg: labelReturnMsg,
    requiredFieldsErrors: {
      email: labelErrorEmail,
      password: labelErrorPassword,
    },
  });

  return validEmail && validPassword;
}

export async function onClickSignIn(
  dispatch: Dispatch<UserAction>,
  sendOneTime: boolean,
  setSendOneTime: Dispatch<SetStateAction<boolean>>,
  email: string,
  password: string,
  returnMsg: string
) {
  if (!sendOneTime) {
    setSendOneTime(true);
  }
  if (!validateSignInForm(dispatch, email, password, returnMsg)) {
    return;
  }

  dispatch({
    type: "userRequest",
  });

  const optionsFetch = {
    method: "POST",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  };

  const response = await fetch(urlApi.signIn, optionsFetch);

  const data: ResponseAuthenticationApi = await response.json();

  if (response.status === 200) {
    const tokenHeader = getAuthHeader(response);
    const refreshTokenHeader = getAuthHeader(response, "refresh-token");

    dispatch({
      type: "userSuccess",
      returnMsg: "Login efetuado com sucesso, você está sendo redirecionado",
      token: tokenHeader,
      refreshToken: refreshTokenHeader,
      name: data.name,
    });

    Router.push("/books");
  } else {
    dispatch({
      type: "userError",
      returnMsg: data.errors.message,
      requiredFieldsErrors: {
        email: "",
        password: "",
      },
    });
  }
}

export function logOut(dispatch: Dispatch<UserAction | BooksAction>) {
  dispatch({ type: "userLogout" });
  dispatch({ type: "clearListBooks" });
  Router.push("/");
}
