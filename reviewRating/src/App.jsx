import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
function App() {
  const stars = [1, 2, 3, 4, 5];
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);

  function handleMouseClick(str) {
    setRating(str);
  }

  function handleMouseHover(str) {
    setHover(str);
  }

  function handleMouseLeave() {
    setHover(rating);
  }
  return (
    <>
      {stars.map((str) => {
        return (
          <FontAwesomeIcon
            className={str <= (hover || rating) ? "text-amber-500" : "text-black"}
            onMouseEnter={() => handleMouseHover(str)}
            onMouseLeave={() => handleMouseLeave(str)}
            onClick={() => handleMouseClick(str)}
            key={str}
            icon={faStar}
          />
        );
      })}
    </>
  );
}

export default App;
