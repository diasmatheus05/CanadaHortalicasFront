import "./home.css";

import Inicio from './components/inicio/inicio';
import Novidades from "./components/novidades/novidades";
import Catalogo from './components/catalogo/catalogo';
import QuemSomos from './components/quemSomos/quemSomos';
import Contato from './components/contato/contato';
import Navbar from "../../components/navbar/navbar";

function Home() {
  return (
    <div id="home">
      <Navbar />

      <Inicio />

      <Novidades />

      <Catalogo />

      <QuemSomos />

      <Contato />
    </div>
  )
}

export default Home;