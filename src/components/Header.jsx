import logo from "../assets/LOGO.png";
import style from "../styles/Header.module.css";

function Header() {
  return (
    <div className={style.headinit}>
      <img src={logo} className={style.logo} alt="Logo de la société" />
      <p className={style.choix}>Accueil</p>
      <p className={style.choix}>À propos</p>
    </div>
  );
}

export default Header;
