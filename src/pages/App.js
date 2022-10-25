import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import APropos from "./A_Propos";
import PageLogement from "./Page_Logement";
import Error from "./Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/à-propos" element={<APropos />} />
        <Route path="/page-logement/:id" element={<PageLogement />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
