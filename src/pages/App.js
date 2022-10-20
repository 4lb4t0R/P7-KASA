import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Error from "./pages/Error";
import APropos from "./pages/APropos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/APropos" element={<APropos />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
