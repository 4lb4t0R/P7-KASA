import style from "../styles/Accueil_Banner";
import banner from "../assets/accueil-mobile";

function Accueil_Banner() {
  return (
    <div className={style.propreté}>
      <img src={banner} alt="paysage apaisant" className={style.banner} />
      <p className={style.mantra}>
        Chez vous, <br /> partout et ailleurs
      </p>
    </div>
  );
}

export default Accueil_Banner;
