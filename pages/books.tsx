import type { NextPage } from "next";
import Image from "next/image";
import { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkLoggedIn } from "../components/form/signInForm/services";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import { UserAction } from "../store/api/login/types";
import { RootReducerState } from "../store/types";
import styles from "../styles/Books.module.css";
import LogOutButton from "../components/form/LogOutButton";
import BooksPagination from "../components/book/BooksPagination";

const Books: NextPage = () => {
  const dispatch: Dispatch<UserAction> = useDispatch();

  const name = useSelector((state: RootReducerState) => state.apiLogin.name);
  const timeToRefresh = useSelector(
    (state: RootReducerState) => state.apiLogin.timeToRefresh
  );

  useEffect(() => {
    checkLoggedIn(dispatch, timeToRefresh, name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DefaultTemplate
      title="Books"
      descriptionContent="Veja todo o nosso arsenal de livros disponíveis exclusivamente para você."
    >
      <main className={styles.main}>
        <div className="container pt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 relative">
            <h2
              className="text-3xl font-light flex items-center"
              id="header-books"
            >
              <Image
                src="/black-logo-ioasys.png"
                alt="ioasys Logo"
                width="105"
                height="36"
              />
              <span className="pl-4">Books</span>
              <LogOutButton className="absolute right-0 inline-block sm:hidden" />
            </h2>
            <div className="hidden sm:flex justify-end items-center">
              <span>Bem vindo, {name}</span>
              <LogOutButton />
            </div>
          </div>

          <div className="pt-10">
            <BooksPagination />
          </div>
        </div>
      </main>
    </DefaultTemplate>
  );
};

export default Books;
