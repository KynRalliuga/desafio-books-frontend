import { Dispatch } from "react";
import {
  BooksAction,
  ResponseBookApi,
  ResponseListBooksApi,
} from "../../store/api/books/types";
import { UserAction } from "../../store/api/login/types";
import { urlApi } from "../../store/api/variables";

export async function loadBooks(
  dispatch: Dispatch<BooksAction | UserAction>,
  page = "1",
  amount = "12"
) {
  const token = localStorage.getItem("token");

  const optionsFetch = {
    method: "GET",
    headers: {
      "content-type": "application/json;charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  };

  const urlApiBooksQuery = `${urlApi.books}?${new URLSearchParams({
    page,
    amount,
  })}`;

  dispatch({ type: "startLoading" });

  const response = await fetch(urlApiBooksQuery, optionsFetch);
  if (response.status === 200) {
    const data: ResponseListBooksApi = await response.json();
    dispatch({ type: "setListBooks", ...data });
  } else if (response.status === 401) {
    dispatch({
      type: "userError",
      returnMsg: "Você foi deslogado por inatividade",
      requiredFieldsErrors: {
        email: "",
        password: "",
      },
    });
  } else {
    dispatch({ type: "clearListBooks" });
  }

  dispatch({ type: "endLoading" });
}

export async function loadBook(
  dispatch: Dispatch<BooksAction | UserAction>,
  id = "0"
) {
  if (id === "0") {
    return;
  }

  const token = localStorage.getItem("token");

  const optionsFetch = {
    method: "GET",
    headers: {
      "content-type": "application/json;charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  };

  const urlApiBooksQuery = `${urlApi.books}/${id}`;

  dispatch({ type: "clearBook" });

  const response = await fetch(urlApiBooksQuery, optionsFetch);
  if (response.status === 200) {
    const data: ResponseBookApi = await response.json();
    dispatch({ type: "setBook", ...data });
  } else if (response.status === 401) {
    dispatch({
      type: "userError",
      returnMsg: "Você foi deslogado por inatividade",
      requiredFieldsErrors: {
        email: "",
        password: "",
      },
    });
  } else {
    dispatch({ type: "clearBook" });
  }

  dispatch({ type: "endLoading" });
}
