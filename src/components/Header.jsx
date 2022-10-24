import logo from "../assets/LOGO.png";
import style from "../styles/Header.module.css";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={style.headinit}>
      <img src={logo} className={style.logo} alt="Logo de la société" />
      <Link className={style.choix} to="/Home">
        Accueil
      </Link>
      <Link className={style.choix} to="/A_Propos">
        À propos
      </Link>
    </div>
  );
}

export default Header;
