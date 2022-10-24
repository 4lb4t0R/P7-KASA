import React from "react";
import "../assets/accueil-fond.png";
import Layout from "./Layout";
import Banner from "../components/Accueil_Banner";
import Card from "../components/Card";

const Home = () => {
  return (
    <Layout>
      <Banner />
      <Card />
    </Layout>
  );
};

export default Home;
