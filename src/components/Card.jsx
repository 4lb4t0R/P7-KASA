import React from "react";
import style from "../styles/Card.module.css";
import logementsData from "../datas/logements";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <ul className="style.list">
      {logementsData.map((logement) => (
        <li key={logement.id}>
          <Link to={`/Page_Logement/${logement.id}`}>
            <div className={style.card}>
              <div>
                <img
                  src={logement.cover}
                  alt={`${logement.tags}`}
                  className={style.cardimage}
                />
              </div>
              <div className={style.cardsubtitle}>
                <h2 className={style.cardtitle}>{logement.title}</h2>
              </div>
              <span className={style.degrade}></span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Card;
