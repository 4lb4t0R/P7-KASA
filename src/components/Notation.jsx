import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import greystar from "../assets/star_rate-24-grey";
import redstar from "../assets/star_rate-24-red";

export default function MyComponent() {
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="App">
      <Rating
        ratingValue={rating}
        fillIcon={redstar}
        emptyIcon={greystar}
        onClick={handleRating}
      />
    </div>
  );
}
