import { useState } from "react";

import {Container } from "react-bootstrap";
import { Menu } from "./components/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Deputados from "./pages/deputados/Deputados";
import DeputadosDetalhes from "./pages/deputados/DeputadosDetalhes";
import Rick from "./pages/rick/Rick";
import RickDetails from "./pages/rick/RickDetalhes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Menu />
       <Container>
        <Routes>
          <Route path="/" element={<Deputados />} />
          <Route path="/:id" element={<DeputadosDetalhes />} />
          <Route path="/rick" element={<Rick />} />
          <Route path="rick/:id" element={<RickDetails/>}/>
        </Routes>
       </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
