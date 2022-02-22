import { useState, useEffect } from "react";
import { Link, useParams, useNavigate} from "react-router-dom";
import axios  from "axios";


const API = process.env.REACT_APP_API_URL;

function StilettoDetails() {
  const [stiletto, setStiletto] = useState({});
  let  { id } =useParams();
  let navigate = useNavigate();

  useEffect(()=>{
    axios.get(API + "/stilettos/" + id)
      .then((res)=>{
        setStiletto(res.data);
      }).catch((err)=>{
        console.log(err);
      })
  }, [id, API]) ;
  

  const handleDelete =()=>{
    axios.delete(API + "/stilettos/" + id)
    .then((res)=>{
      navigate("/stilettos");
    }).catch((err)=>{
      console.log(err);
    });
  }

  return (
    <article className = "">
    <div className = "Stiletto">
    <h5>Stiletto name: {stiletto.name}</h5>
      <h6>Stiletto description: {stiletto.description}</h6>
      <h6>Price: {stiletto.price}</h6>
      <h6>Rating: {stiletto.rating}</h6>
    </div>
    <div className="showNavigation">
      <div>
        <Link to={`/stilettos`}>
          <button>Back</button>
        </Link>
      </div>
      <div>
        <Link to={`/stilettos/${id}/edit`}>
          <button>Edit</button>
        </Link>
      </div>
      <div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  </article>
  )
}

export default StilettoDetails;