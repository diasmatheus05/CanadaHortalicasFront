import "./catalogo.css";

import Navbar from "../../components/navbar/navbar";
import Card from './components/card/card';

import lavandas from '../../assets/images/lavandas.jpg';

function Catalogo() {
  return (
    <div id="catalogo-page">
      <Navbar />
      
      <div className="header">
        <div className="opacidade"></div>

        <div className="content">
          <h1 className="title">Nosso catálogo</h1>
          <p className="text">Especialista em produzir mudas de hortaliças, ervas aromáticas e flores comestíveis, são mais 200 espécies para fazer sua horta em qualquer espaço!</p>
        </div>
      </div>

      <div className="row">
        <div className="search">
          <p>Pesquise aqui o que procura:</p>
          <select name="options" id="options-select">
            <option value="Lavanda">Lavanda</option>
            <option value="Alface">Alface</option>
            <option value="Tomate">Tomate</option>
          </select>
        </div>

        <div className="text">
          <p>Ao encontrar o que deseja, você poderá deixar selecionado e clicar em Pedir agora, que iremos receber uma lista com os itens para um melhor atendimento</p>
          <a href="https://api.whatsapp.com/send?phone=553196376163&text=Olá,%20gostaria%20de%20fazer%20um%20pedido%20e%20minha%20lista%20é:%20Lavandas,%20Tomates,%20Alfaces">
            <div className="button">Pedir agora</div>
          </a>
        </div>
      </div>

      <div className="cards-wrapper">
        <div>
          <Card image={lavandas} name="Lavandas" text="Planta herbácea de 40 cm a 80 cm de altura. O seu caule é ereto e as folhas são alongadas e estreitas. As flores são de cor azul-claro, com cinco pétalas. O fruto é uma cápsula globulosa a cachopa contendo de sete a onze sementes. Cada planta pode ter dezenas de cachopas." />
          <Card image={lavandas} name="Lavandas" text="Planta herbácea de 40 cm a 80 cm de altura. O seu caule é ereto e as folhas são alongadas e estreitas. As flores são de cor azul-claro, com cinco pétalas. O fruto é uma cápsula globulosa a cachopa contendo de sete a onze sementes. Cada planta pode ter dezenas de cachopas." />
          <Card image={lavandas} name="Lavandas" text="Planta herbácea de 40 cm a 80 cm de altura. O seu caule é ereto e as folhas são alongadas e estreitas. As flores são de cor azul-claro, com cinco pétalas. O fruto é uma cápsula globulosa a cachopa contendo de sete a onze sementes. Cada planta pode ter dezenas de cachopas." />
          <Card image={lavandas} name="Lavandas" text="Planta herbácea de 40 cm a 80 cm de altura. O seu caule é ereto e as folhas são alongadas e estreitas. As flores são de cor azul-claro, com cinco pétalas. O fruto é uma cápsula globulosa a cachopa contendo de sete a onze sementes. Cada planta pode ter dezenas de cachopas." />
        </div>
      </div>
    </div>
  )
}

export default Catalogo;