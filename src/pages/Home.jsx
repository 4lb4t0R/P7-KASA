import Accueil from "../components/Accueil";
import Banner from "../components/Accueil_Banner";
import Layout from "./Layout";

function Home() {
  return (
    <Layout>
      <Banner />
      <Accueil />
    </Layout>
  );
}

export default Home;
