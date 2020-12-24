import { useHistory } from 'react-router-dom';

import "./catalogo.css";

import catalogo_img from '../../../../assets/images/catalogogarden.jpg'

function Catalogo() {
  const history = useHistory();

  return (  
    <div id="catalogo">
      <img src={catalogo_img} alt="Imagem de mudas"/>

      <div>
        <div className="title-line">
          <h4>Nosso</h4>
          <h1>Catálogo</h1>
        </div>

        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <div className="buttons">
          <a href="https://api.whatsapp.com/send?phone=553196376163&text=Olá,%20gostaria%20de%20fazer%20um%20pedido">
            <div className="pedir-agora">Pedir agora</div>
          </a>
          <div className="ver-mais" onClick={() => history.push('/catalogo')}>Ver mais</div>
        </div>
      </div>
    </div>
  )
}

export default Catalogo;