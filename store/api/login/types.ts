import { Action } from "redux";

export interface CredentialsUserProperties {
  email: string;
  password: string;
}

export interface RequiredFieldsErrors {
  email: "" | "Email inválido";
  password: "" | "Senha deve ter no mínimo 6 caracteres";
}

export interface User {
  isLoading: boolean;
  returnMsg: string;
  name: string;
  email: string;
  password: string;
  requiredFieldsErrors: RequiredFieldsErrors;
  timeToRefresh: 6000;
}

export interface EmailOnChange extends Action {
  type: "emailOnChange";
  email: string;
}
export interface PasswordOnChange extends Action {
  type: "passwordOnChange";
  password: string;
}
export interface UserRequest extends Action {
  type: "userRequest";
}
export interface UserClear extends Action {
  type: "userClear";
}
export interface UserLogout extends Action {
  type: "userLogout";
}
export interface UserSuccess extends Action {
  type: "userSuccess";
  returnMsg: string;
  token: string;
  refreshToken: string;
  name: string;
}
export interface UserError extends Action {
  type: "userError";
  returnMsg: string;
  requiredFieldsErrors: RequiredFieldsErrors;
}

export interface ResponseAuthenticationApi {
  id: string;
  name: string;
  birthdate: string;
  gender: string;
  errors: {
    message: string;
  };
}

export type UserAction =
  | EmailOnChange
  | PasswordOnChange
  | UserRequest
  | UserClear
  | UserLogout
  | UserSuccess
  | UserError;
