import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";


function StilettoNewForm(){
    const[stiletto, setStiletto] = useState({
        name: "",
        description: "",
        price: "",
        rating: "",
        featured: false,
    })

    const navigate = useNavigate();

    const handleTextChange = (event) => {
        setStiletto({ ...stiletto, [event.target.id]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}/stilettos`, stiletto)
          .then((res)=>{
            navigate("/stilettos");
          }).catch((err)=>{
            console.log(err);
          })
    };  

    return(
        <div className="New">
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
            type="text"
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
            placeholder="Rating"
            />
            <br />
            <input type="submit" />
      </form>
    </div>
    )
}

export default StilettoNewForm;