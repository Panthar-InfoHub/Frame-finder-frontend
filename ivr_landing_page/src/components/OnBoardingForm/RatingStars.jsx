import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button"; // optional

const RatingStars = ({ max = 5, onRate,rating,setRating }) => {
//   const [rating, setRating] = useState(0);     // selected rating
  const [hovered, setHovered] = useState(null); // hovered value

  const handleClick = (value) => {
    setRating(value);
    if (onRate) onRate(value);
  };

  return (
    <div className="flex justify-between">
      {Array.from({ length: max }, (_, i) => {
        const value = i + 1;
        const isActive = value <= (hovered ?? rating);

        return (
          <Star
            key={value}
            size={24}
            className={`cursor-pointer transition-colors ${
              isActive ? "fill-yellow-400 stroke-yellow-500" : "stroke-gray-400"
            }`}
            onMouseEnter={() => setHovered(value)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleClick(value)}
          />
        );
      })}
    </div>
  );
};

export default RatingStars;
