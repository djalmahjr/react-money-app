import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faMoneyCheckAlt,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import Tab from "./Tab";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation().pathname;

  const [iconHome, setIconHome] = useState("1x");
  const [iconMoney, setIconMoney] = useState("1x");
  const [iconList, setIconList] = useState("1x");

  return (
    <nav className="navbar">
      <ul>
        <Tab
          location={location}
          target="/"
          mouseOver={() => {
            setIconHome("lg");
          }}
          mouseOut={() => {
            setIconHome("1x");
          }}
        >
          <Link to="/">
            <FontAwesomeIcon icon={faHome} size={iconHome} />
            <span>Home</span>
          </Link>
        </Tab>
        <Tab
          location={location}
          target="/form-balance"
          mouseOver={() => {
            setIconMoney("lg");
          }}
          mouseOut={() => {
            setIconMoney("1x");
          }}
        >
          <Link to="/form-balance">
            <FontAwesomeIcon icon={faMoneyCheckAlt} size={iconMoney} />
            <span>Balanço de Finanças</span>
          </Link>
        </Tab>
        <Tab
          location={location}
          target="/list-market"
          mouseOver={() => {
            setIconList("lg");
          }}
          mouseOut={() => {
            setIconList("1x");
          }}
        >
          <Link to="/list-market">
            <FontAwesomeIcon icon={faList} size={iconList} />
            <span>Lista Supermarcado</span>
          </Link>
        </Tab>
      </ul>
    </nav>
  );
};

export default Navbar;
