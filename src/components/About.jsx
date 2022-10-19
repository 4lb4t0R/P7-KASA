import style from "../styles/About.module.css";
import fond from "../assets/about.png";

function About() {
  return (
    <section>
      <img src={fond} className={style.fond} alt="forêt apaisante" />
      <div className={style.déroulant}>
        Fiabilité
        <p className={style.descriptif}>
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </p>
      </div>
      <div className={style.déroulant}>
        Respect
        <p className={style.descriptif}>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
      </div>
      <div className={style.déroulant}>
        Service
        <p className={style.descriptif}>
          Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite. N'hésitez pas à nous contacter si vous avez la
          moindre question.
        </p>
      </div>
      <div className={style.déroulant}>
        Sécurité
        <p className={style.descriptif}>
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </p>
      </div>
    </section>
  );
}

export default About;
