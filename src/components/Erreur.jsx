import style from "../styles/Erreur.module.css";

function Erreur() {
  return (
    <div className={style.diverreur}>
      <div className={style.nbcontain}>
        <h2 className={style.nberreur}>404</h2>
      </div>
      <p className={style.msgerreur}>
        Oups! La page que vous demandez n'existe pas
      </p>
      <p className={style.retourerreur}>Retourner sur la page d'accueil</p>
    </div>
  );
}

export default Erreur;
