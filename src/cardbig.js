import { AiFillStar } from "react-icons/ai";

import "./cardbig.css";

export default function CardBig(props) {
  return (
    <div className="containerBig">
      <div className="imgcon">
        <img src={props.img} alt="" className="posterBig" />
        <div className="star">
          <AiFillStar color="rgb(253, 199, 76)" size="15" />
          <p className="rate">4.6</p>
        </div>
      </div>
      <div className="descriptionBig">
        <div className="flexdes">
          <p className="title">{props.title}</p>
          <div className="imax">3D IMAX</div>
        </div>
        <p className="genre">{props.genre}</p>
      </div>
    </div>
  );
}
