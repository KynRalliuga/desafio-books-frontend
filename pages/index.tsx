import type { NextPage } from "next";
import Image from "next/image";
import { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SignInForm from "../components/form/signInForm/signInForm";
import { checkLoggedIn } from "../components/form/signInForm/services";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import { UserAction } from "../store/api/login/types";
import { RootReducerState } from "../store/types";
import styles from "../styles/Home.module.css";

const Login: NextPage = () => {
  const dispatch: Dispatch<UserAction> = useDispatch();

  const timeToRefresh = useSelector(
    (state: RootReducerState) => state.apiLogin.timeToRefresh
  );

  useEffect(() => {
    checkLoggedIn(dispatch, timeToRefresh, false, "/books");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DefaultTemplate
      title="Login"
      descriptionContent="Entre para visualizar o livros disponíveis."
    >
      <main className={styles.main}>
        <div className="container">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-4 h-screen content-center">
            <div className="login-form">
              <h2 className="text-3xl font-light text-white flex pb-12">
                <Image
                  src="/white-logo-ioasys.png"
                  alt="ioasys Logo"
                  width="105"
                  height="36"
                />
                <span className="pl-4">Books</span>
              </h2>
              <SignInForm />
            </div>
          </div>
        </div>
      </main>
    </DefaultTemplate>
  );
};

export default Login;
