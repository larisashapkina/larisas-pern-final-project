import { Link } from "react-router-dom";

function Stiletto({stiletto}) {
  return (
    <div className="Stiletto">
       <Link to={`/stilettos/${stiletto.id}`}>
        <h4>{stiletto.name}</h4>
        </Link>
      <img src={stiletto.image} alt={stiletto.name}></img>
      <div>{stiletto.description}</div>
      <div>${stiletto.price}</div>
      <div>Rating: {stiletto.rating}</div>
      <div>{stiletto.featured ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}</div>
      
    </div>
  );
}

export default Stiletto;
