import type { NextPage } from "next";
import Image from "next/image";
import { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkLoggedIn, logOut } from "../components/form/signInForm/services";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import { UserAction } from "../store/api/login/types";
import { RootReducerState } from "../store/types";
import { LogoutIcon } from "@heroicons/react/outline";
import styles from "../styles/Books.module.css";

const Books: NextPage = () => {
  const dispatch: Dispatch<UserAction> = useDispatch();

  const name = useSelector((state: RootReducerState) => state.apiLogin.name);
  const timeToRefresh = useSelector(
    (state: RootReducerState) => state.apiLogin.timeToRefresh
  );

  useEffect(() => {
    checkLoggedIn(dispatch, timeToRefresh);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DefaultTemplate
      title="Books"
      descriptionContent="Veja todo o nosso arsenal de livros disponíveis exclusivamente para você."
    >
      <main className={styles.main}>
        <div className="container pt-10">
          <div className="grid grid-cols-2">
            <h2 className="text-3xl font-light flex">
              <Image
                src="/black-logo-ioasys.png"
                alt="ioasys Logo"
                width="105"
                height="36"
              />
              <span className="pl-4">Books</span>
            </h2>
            <div className="flex justify-end items-center">
              <span>Bem vindo, {name}</span>
              <button
                className="rounded-full w-8 h-8 p-1 ml-4 border border-[#333333]/[0.2]"
                onClick={() => {
                  logOut(dispatch);
                }}
              >
                <LogoutIcon />
              </button>
            </div>
          </div>
        </div>
      </main>
    </DefaultTemplate>
  );
};

export default Books;
