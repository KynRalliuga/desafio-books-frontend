import { Dispatch, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BallonText from "../BallonText";
import InputText from "../InputText";
import Spinner from "../Spinner";
import { UserAction } from "../../../store/api/login/types";
import { RootReducerState } from "../../../store/types";
import { onClickSignIn, validateSignInForm } from "./services";

const SignInForm: React.FC = () => {
  const dispatch: Dispatch<UserAction> = useDispatch();

  const [sendOneTime, setSendOneTime] = useState(false);

  const isLoading = useSelector(
    (state: RootReducerState) => state.apiLogin.isLoading
  );
  const email = useSelector((state: RootReducerState) => state.apiLogin.email);
  const password = useSelector(
    (state: RootReducerState) => state.apiLogin.password
  );
  const requiredFieldsErrors = useSelector(
    (state: RootReducerState) => state.apiLogin.requiredFieldsErrors
  );
  const returnMsg = useSelector(
    (state: RootReducerState) => state.apiLogin.returnMsg
  );

  function emailOnChange(e: React.FormEvent<HTMLInputElement>) {
    dispatch({
      type: "emailOnChange",
      email: e.currentTarget.value,
    });
  }

  function passwordOnChange(e: React.FormEvent<HTMLInputElement>) {
    dispatch({
      type: "passwordOnChange",
      password: e.currentTarget.value,
    });
  }

  const onClickSignInHelper = () => {
    onClickSignIn(
      dispatch,
      sendOneTime,
      setSendOneTime,
      email,
      password,
      returnMsg
    );
  };

  useEffect(() => {
    dispatch({
      type: "userClear",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (sendOneTime && (email || password)) {
      validateSignInForm(dispatch, email, password, returnMsg);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password]);

  return (
    <>
      <div className="mb-4">
        <InputText
          label="Email"
          value={email}
          onChange={emailOnChange}
          onEnter={onClickSignInHelper}
          placeholder="Digite seu email"
          errorLabel={requiredFieldsErrors.email}
        />
      </div>
      <div>
        <InputText
          label="Senha"
          type="password"
          value={password}
          onChange={passwordOnChange}
          onEnter={onClickSignInHelper}
          placeholder="Digite sua senha"
          errorLabel={requiredFieldsErrors.password}
          suffixButtonText="Entrar"
          onClickSuffixButton={onClickSignInHelper}
        />
      </div>
      <div className="relative">
        <div
          className={`absolute left-0 transition-all ${
            isLoading || returnMsg
              ? "block opacity-100 top-6"
              : "none opacity-0 top-0"
          } `}
        >
          <BallonText>{returnMsg ? returnMsg : <Spinner />}</BallonText>
        </div>
      </div>
    </>
  );
};

export default SignInForm;
