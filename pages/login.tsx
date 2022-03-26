import type { NextPage } from "next";
import DefaultTemplate from "../components/templates/DefaultTemplate";

const Login: NextPage = () => {
  return (
    <DefaultTemplate
      title="Login"
      descriptionContent="Entre para visualizar o livros disponíveis."
    >
      <h1 className="text-3xl font-bold underline">Hello TailWindCSS!</h1>
    </DefaultTemplate>
  );
};

export default Login;
