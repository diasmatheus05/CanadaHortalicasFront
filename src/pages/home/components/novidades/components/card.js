import "./card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="image">
        <img src={props.image} alt={props.alt} />
      </div>

      <div className="text">
        <p>{props.text}</p>
        <p className="date">{props.date}</p>
      </div>
    </div>
  )
}

export default Card;