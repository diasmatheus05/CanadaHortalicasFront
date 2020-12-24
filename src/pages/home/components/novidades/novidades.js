import "./novidades.css";

import Card from "./components/card";

import lavandas from '../../../../assets/images/lavandas.jpg';
import babosa from '../../../../assets/images/babosa.png';
import manjericao from '../../../../assets/images/manjericao.jpg';

function Novidades() {
  return ( 
    <div id="novidades">
      <h1>Novidades</h1>

      <div className="novidades-card-wrapper">
        <div>
          <Card image={lavandas} alt="Lavandas" text="Some quick example text to build on the ." date="22/06/2020" />
          <Card image={babosa} alt="Lavandas" text="Some quick example text to build on the card title and make up the bulk of the card's content." date="22/06/2020" />
          <Card image={manjericao} alt="Lavandas" text="Some quick example text to build on the card title and make up the bulk of the card's content." date="22/06/2020" />
        </div>
      </div>
    </div>
  )
}

export default Novidades;