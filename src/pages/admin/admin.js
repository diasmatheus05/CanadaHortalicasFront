import { useState } from 'react';

import "./admin.css";

import lavandas from '../../assets/images/lavandas.jpg';
import excluir from '../../assets/icons/excluir.svg';
import editar from '../../assets/icons/editar.svg';

function Admin() {
  const [logged, setLogged] = useState(false);

  function renderLogin() {
    return (
      <div className="non-logged">
        <h1 className="title">Login do Administrador</h1>

        <div>
          <label htmlFor="name">Nome:</label>
          <input id="name" type="text"/>
          <label htmlFor="password">Senha:</label>
          <input id="password" type="password"/>

          <div className="login-button" onClick={() => setLogged(true)}>Login</div>
        </div>
      </div>
    )
  }

  function renderAdminPart() {
    return (
      <div className="logged">
        <h1>Canada Hortaliças - Administrador</h1>

        <div>
          <h2>Novidades</h2>

          <div className="wrapper">
            <div className="card">
              <div>
                <img className="image" src={lavandas} alt="Lavandas"/>
                <p className="text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p className="date">22/06/2020</p>
              </div>

              <div>
                <img className="icons" src={editar} alt="Editar"/>
                <img className="icons" src={excluir} alt="Deletar"/>
              </div>
            </div>
            <div className="card">
              <div>
                <img className="image" src={lavandas} alt="Lavandas"/>
                <p className="text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p className="date">22/06/2020</p>
              </div>

              <div>
                <img className="icons" src={editar} alt="Editar"/>
                <img className="icons" src={excluir} alt="Deletar"/>
              </div>
            </div>
            <div className="card">
              <div>
                <img className="image" src={lavandas} alt="Lavandas"/>
                <p className="text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p className="date">22/06/2020</p>
              </div>

              <div>
                <img className="icons" src={editar} alt="Editar"/>
                <img className="icons" src={excluir} alt="Deletar"/>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2>Catálogo</h2>

          <div className="wrapper">
            <div className="card">
              <div>
                <img className="image" src={lavandas} alt="Lavandas"/>
                <p className="text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p className="date">22/06/2020</p>
              </div>

              <div>
                <img className="icons" src={editar} alt="Editar"/>
                <img className="icons" src={excluir} alt="Deletar"/>
              </div>
            </div>
            <div className="card">
              <div>
                <img className="image" src={lavandas} alt="Lavandas"/>
                <p className="text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p className="date">22/06/2020</p>
              </div>

              <div>
                <img className="icons" src={editar} alt="Editar"/>
                <img className="icons" src={excluir} alt="Deletar"/>
              </div>
            </div>
            <div className="card">
              <div>
                <img className="image" src={lavandas} alt="Lavandas"/>
                <p className="text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p className="date">22/06/2020</p>
              </div>

              <div>
                <img className="icons" src={editar} alt="Editar"/>
                <img className="icons" src={excluir} alt="Deletar"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div id="admin-page">
      {logged
        ? renderAdminPart()
        : renderLogin()
      }
    </div>
  )
}

export default Admin;