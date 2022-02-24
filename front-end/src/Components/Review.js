import ReviewForm from "./ReviewForm";
import { useState} from "react";

function Review({ review, handleDelete, handleSubmit }) {
    const [viewEditForm, setViewEditForm] = useState(false);

    const toggleView = () => {
        setViewEditForm(!viewEditForm);
      };

    return (
        <div className="Review">
        {viewEditForm ? (
        <ReviewForm handleSubmit={handleSubmit} toggleView={toggleView} reviewDetails={review} />
            ) : (
            <div>
                <h4>
                {review.title}</h4> 
                <p>{review.content}</p>
                <h5>Rating: {review.rating}</h5>
                <h5>{review.reviewer}</h5>
                
            </div>
            )}
        <button onClick={() => handleDelete(review.id)}>Delete</button>
        <button onClick={toggleView}>Edit this review</button>
      </div>
    );
  }
  
  export default Review;