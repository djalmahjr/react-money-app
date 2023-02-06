import "./Home.css";
import React from "react";
import Navbar from "../../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/fontawesome-free-brands";

export default function Home(props) {
  return (
    <>
      <Navbar />
      <div className="contentTab">
        <h1 className="headerTitle">
          <FontAwesomeIcon icon={faInfoCircle} size="sm" /> Info
        </h1>
        <p>
          Este projeto foi desenvolvido em ReactJS com o objetivo de ser um meio
          de estudo, entre oque foi usado no projeto esta o consumo de uma API
          REST utilizando o{" "}
          <a
            href="https://www.npmjs.com/package/json-server"
            rel="noopener noreferrer"
            target="_blank"
          >
            JSON-Server
          </a>
          .
        </p>
        <p>Algumas tecnologias empregadas no projeto:</p>
        <ul>
          <li>
            1) React Router e React Router Dom:{" "}
            <span>Para Controlar rotas e navegação entre telas</span>
          </li>
          <li>
            2) React Redux:{" "}
            <span>
              Para gerenciar o estado dos meus componentes e compartilhar dados
              entre eles
            </span>
          </li>
          <li>
            3) Redux Multi:{" "}
            <span>
              Para conseguir disparar mais que uma action simultaneamente
            </span>
          </li>
          <li>
            4) Redux Thunk:{" "}
            <span>Para que o redux possa realizar uma requisiçao a API</span>
          </li>
          <li>
            5) Formik:{" "}
            <span>Para gerenciar formulários de forma mais simplificada</span>
          </li>
          <li>
            6) Axios: <span>Para realizar requests a uma API REST</span>
          </li>
        </ul>
        <div className="profileGit">
          <span>Developed By: Djalma Hipólito Junior</span>
          <a
            href="https://github.com/djalmahjr"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" /> Acesse meu GitHub
          </a>
        </div>
      </div>
    </>
  );
}
