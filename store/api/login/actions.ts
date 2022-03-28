import {
  UserRequest,
  UserSuccess,
  UserError,
  EmailOnChange,
  PasswordOnChange,
  UserClear,
  UserLogout,
} from "./types";

export const emailOnChange = (): EmailOnChange => ({
  type: "emailOnChange",
  email: "",
});
export const passwordOnChange = (): PasswordOnChange => ({
  type: "passwordOnChange",
  password: "",
});
export const userRequest = (): UserRequest => ({
  type: "userRequest",
});
export const userClear = (): UserClear => ({
  type: "userClear",
});
export const userLogout = (): UserLogout => ({
  type: "userLogout",
});
export const userSuccess = (): UserSuccess => ({
  type: "userSuccess",
  returnMsg: "",
  token: "",
  refreshToken: "",
  name: "",
});
export const userError = (): UserError => ({
  type: "userError",
  returnMsg: "",
  requiredFieldsErrors: {
    email: "",
    password: "",
  },
});
