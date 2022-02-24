import { useState, useEffect } from "react";
import { Link, useParams, useNavigate} from "react-router-dom";
import axios  from "axios";
import Reviews from "./Reviews";


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
    <article className = "shoe-details">
    <div className ="st-details">
      <div>Stiletto name: {stiletto.name}</div>
      <div>Stiletto description: {stiletto.description}</div>
      <div>Price: ${stiletto.price}</div>
      <div>Rating: {stiletto.rating}</div>
      <div>Featured:{stiletto.featured? (<span>👠</span>) : (<span>&nbsp; &nbsp; &nbsp;</span>
        )}</div>

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
    <Reviews/>
  </article>
  );
}

export default StilettoDetails;
