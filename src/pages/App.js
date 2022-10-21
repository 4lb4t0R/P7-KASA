import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import APropos from "./A_Propos";
import PageLogement from "./Page_Logement";
import Error from "./Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/A_Propos" element={<APropos />} />
        <Route path="/Page_Logement" element={<PageLogement />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
