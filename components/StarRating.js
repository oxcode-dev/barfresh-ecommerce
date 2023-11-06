import React, { useState } from "react";

export default function StarRating({ rating, setRating, iconClassName='w-10 h-10' }) {
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((option, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating && setRating(ratingValue)}
            />
            <span
              size={20}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              className={
                `${ratingValue <= (hover || rating) ? "activeStar" : "star"} ${iconClassName}`
              }
            ></span>
          </label>
        );
      })}
    </div>
  );
}
