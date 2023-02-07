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
