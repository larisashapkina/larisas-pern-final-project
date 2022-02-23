import axios from "axios";
import { useState, useEffect } from "react";
import Stiletto from "./Stiletto";

const API = process.env.REACT_APP_API_URL;

function Stilettos() {
  
  const [stilettos, setStilettos] = useState([]);
  useEffect(() => {
    axios.get(API + "/stilettos")
    .then((res)=>{
      setStilettos(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  }, []);

  return (
    <div className="Stilettos">
      <section>
        <table>
          <tbody>
            {stilettos.map((stiletto) => {
              return <Stiletto key={stiletto.id} stiletto={stiletto} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Stilettos;
