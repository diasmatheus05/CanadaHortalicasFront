import { useState } from 'react';

import "./navbar.css";

import logo from "../../assets/images/logoCH.jpg";

import home from '../../assets/icons/plantar.svg';
import catalogo from '../../assets/icons/livro.svg';
import quem_somos from '../../assets/icons/do-utilizador.svg';
import contato from '../../assets/icons/whatsapp.svg';

function Navbar() {
  const [sideNav, setSideNav] = useState(false);

  return (
    <div id="navbar">
      <img src={logo} alt="Logo" className="logo"/>

      <div className="options">
        <div>
          <img src={home} alt="Home"/>
          <a href="/">Home</a>
        </div>
        <div>
          <img src={catalogo} alt="Catálogo"/>
          <a href="/#catalogo">Catálogo</a>
        </div>
        <div>
          <img src={quem_somos} alt="Quem somos"/>
          <a href="/#quem-somos">Quem Somos</a>
        </div>
        <div>
          <img src={contato} alt="Contato"/>
          <a href="/#contato">Contato</a>
        </div>
      </div>

      <div className={"sandwich-icon " + (sideNav && 'clicked')} onClick={() => setSideNav(!sideNav)}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </div>
  )
}

export default Navbar;