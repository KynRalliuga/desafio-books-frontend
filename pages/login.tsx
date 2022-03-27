import type { NextPage } from "next";
import Image from "next/image";
import InputText from "../components/form/InputText";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import styles from "../styles/Login.module.css";

const Login: NextPage = () => {
  return (
    <DefaultTemplate
      title="Login"
      descriptionContent="Entre para visualizar o livros disponíveis."
    >
      <main className={styles.main}>
        <div className="container">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-4 h-screen content-center">
            <form className="login-form">
              <h2 className="text-3xl font-light text-white flex pb-12">
                <Image
                  src="/white-logo-ioasys.png"
                  alt="ioasys Logo"
                  width="105"
                  height="36"
                />
                <span className="pl-4">Books</span>
              </h2>
              <div className="mb-4">
                <InputText label="Email" placeholder="Digite seu email" />
              </div>
              <div>
                <InputText
                  label="Senha"
                  type="password"
                  placeholder="Digite sua senha"
                  suffixButtonText="Entrar"
                />
              </div>
            </form>
          </div>
        </div>
      </main>
    </DefaultTemplate>
  );
};

export default Login;
