import produce from "immer";
import { User, UserAction } from "./types";

const initialState: User = {
  isLoading: false,
  returnMsg: "",
  name: "",
  email: "",
  password: "",
  timeToRefresh: 6000,
  requiredFieldsErrors: {
    email: "",
    password: "",
  },
};

const reducer = (state = initialState, action: UserAction): User => {
  switch (action.type) {
    case "emailOnChange":
      return produce(state, (draft) => {
        draft.email = action.email;
      });
    case "passwordOnChange":
      return produce(state, (draft) => {
        draft.password = action.password;
      });
    case "userRequest":
      return produce(state, (draft) => {
        draft.isLoading = true;
        draft.name = "";
        draft.returnMsg = "";
        draft.requiredFieldsErrors = {
          email: "",
          password: "",
        };
        localStorage.removeItem("lastRefresh");
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
      });
    case "userClear":
      return produce(state, (draft) => {
        draft.isLoading = false;
        draft.returnMsg = "";
        draft.name = "";
        draft.email = "";
        draft.password = "";
        draft.requiredFieldsErrors = {
          email: "",
          password: "",
        };
      });
    case "userLogout":
      return produce(state, (draft) => {
        draft.isLoading = false;
        draft.returnMsg = "";
        draft.name = "";
        draft.email = "";
        draft.password = "";
        draft.requiredFieldsErrors = {
          email: "",
          password: "",
        };
        localStorage.removeItem("lastRefresh");
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
      });
    case "userSuccess":
      return produce(state, (draft) => {
        draft.isLoading = false;
        draft.returnMsg = action.returnMsg;
        draft.name = action.name;
        draft.email = "";
        draft.password = "";
        draft.requiredFieldsErrors = {
          email: "",
          password: "",
        };
        localStorage.setItem(
          "lastRefresh",
          Math.floor(Date.now() / 1000).toString()
        );
        localStorage.setItem("token", action.token);
        localStorage.setItem("refreshToken", action.refreshToken);
      });
    case "userError":
      return produce(state, (draft) => {
        draft.isLoading = false;
        draft.returnMsg = action.returnMsg;
        draft.requiredFieldsErrors = action.requiredFieldsErrors;
        localStorage.removeItem("lastRefresh");
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
      });
    default:
      return state;
  }
};

export default reducer;
