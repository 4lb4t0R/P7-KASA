import style from "../styles/About.module.css";
import fond from "../assets/about.png";
import data from "../datas/about";
import { useState } from "react";

function About() {
  const [selected, setSelected] = useState(null);
  const trigger = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <section className={style.propreté}>
      <img src={fond} className={style.fond} alt="forêt apaisante" />

      {data.map((item, i) => (
        <div>
          <div className={style.déroulant} onClick={() => trigger(i)}>
            <h5>{item.catégorie}</h5>
          </div>
          <div className={selected === i ? "descriptif tada" : "descriptif"}>
            {item.descriptif}
          </div>
        </div>
      ))}
    </section>
  );
}

export default About;
