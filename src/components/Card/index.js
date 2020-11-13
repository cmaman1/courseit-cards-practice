import './style.css';

function Card(props) {
  return (
    <div className="card">
      <img src={props.imgUrl} className="card-img"></img>
      <h2 className="card-title">{props.title}</h2>
      <p className="card-description">{props.description}</p>
    </div>
  );
}

export default Card;
