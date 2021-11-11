import "./cardsmall.css";
import { AiFillStar } from "react-icons/ai";
import { BsHeartFill } from "react-icons/bs";

function CardSmall({ title, genre, img, size, color, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={img} alt="" />
      <div className="description">
        <div className="titlesmall">
          <p>{title}</p>
          <BsHeartFill color="red" size="25" />
        </div>
        <p className="hours">1 H 24 Min</p>
        <div className="genresmall">{genre}</div>
        <div className="views">
          <p>4.3k views</p>
          <div className="rating">
            <AiFillStar color="rgb(253, 199, 76)" size="13" />
            <p>4.7</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSmall;
