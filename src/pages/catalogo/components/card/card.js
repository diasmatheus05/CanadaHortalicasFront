import { useState } from 'react';

import "./card.css";

function Card(props) {
  const [moreInformation, setMoreInformation] = useState(false);

  window.onclick = function(event) {
    var modal = document.getElementById("modal");

    if (event.target === modal) {
      setMoreInformation(false)
    }
  }

  function renderMoreInformationBox() {
    return (
      <div id="modal" className="modal">

        <div className="modal-content">
          <span className="close" onClick={() => setMoreInformation(false)}>&times;</span>

          <img src={props.image} alt={props.name}/>

          <div>
            <input type="checkbox"/>

            <p className="title">{props.name}</p> 
            <p className="description">{props.text}</p>
          </div>
        </div>

      </div>
    )
  }

  return (
    <div className="card">
      <img src={props.image} alt={props.name} onClick={() => setMoreInformation(true)}/>
      <div>
        <input id={props.name} name="catalogo-cards" type="checkbox" />

        <p className="title">{props.name}</p>
        <p className="text"  onClick={() => setMoreInformation(true)}>
          {props.text}
        </p>

        <div className="bar"></div>
      </div>

      {moreInformation && renderMoreInformationBox()}
    </div>
  )
}

export default Card;