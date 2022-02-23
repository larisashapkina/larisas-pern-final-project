import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function StilettoEditForm() {
    let { id } = useParams();
  
        const[stiletto, setStiletto] = useState({
            name: "",
            description: "",
            price: "",
            rating: "",
            featured: false,
    });
  
    const navigate = useNavigate();
  
    const handleTextChange = (event) => {
      setStiletto({ ...stiletto, [event.target.id]: event.target.value });
    };
  
    useEffect(() => {
      axios.get(`${process.env.REACT_APP_API_URL}/stilettos/${id}`)
        .then((res)=>{
          setStiletto(res.data);
        }).catch((err)=>{
          navigate("/not-found");
        })
    }, [id]);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      axios.put(`${process.env.REACT_APP_API_URL}/stilettos/${id}`, stiletto)
        .then((res)=>{
          navigate(`/stilettos`);
        }).catch((err)=>{
          console.log(err)
        })
    };
    return (
        <div className="EditForm">
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Stiletto Name</label>
            <input required
            id="name"
            value={stiletto.name}
            type="text"
            onChange={handleTextChange}
            placeholder="Name of Stiletto"
            />
            {/* <label htmlFor="image">Image:</label>
            <input required
            id="image"
            type="text"
            name="image"
            value={snack.image}
            placeholder="Image"
            onChange={handleTextChange}
            /> */}
            <label htmlFor="description">Description:</label>
            <input
            id="description"
            type="text"
            value={stiletto.description}
            placeholder="Description"
            onChange={handleTextChange}
            />
            <label htmlFor="price">Price:</label>
            <input
            id="price"
            type="number"
            onChange={handleTextChange}
            value={stiletto.price}
            placeholder="Price"
            />
            <label htmlFor="rating">Rating:</label>
            <input
            id="rating"
            value={stiletto.rating}
            type="text"
            onChange={handleTextChange}
            placeholder="Please submit from 0 to 5"
            />
            <br />
            <input type="submit" />
      </form>
    </div>
    );
  }
  
  export default StilettoEditForm;