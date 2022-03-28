import { LogoutIcon } from "@heroicons/react/outline";
import React, { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { BooksAction } from "../../store/api/books/types";
import { UserAction } from "../../store/api/login/types";
import { logOut } from "./signInForm/services";

interface logOutButtonInterface {
  className?: string;
}

const LogOutButton: React.FC<logOutButtonInterface> = (props) => {
  const dispatch: Dispatch<UserAction | BooksAction> = useDispatch();
  const { className } = props;

  return (
    <button
      className={`rounded-full w-8 h-8 p-1 ml-4 border border-[#333333]/[0.2] ${className}`}
      onClick={() => {
        logOut(dispatch);
      }}
    >
      <LogoutIcon />
    </button>
  );
};

export default LogOutButton;
