import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";
import { FiMail } from "react-icons/fi";

function CardProfile({ item }) {
  return (
    <div className="cardprofile">
      <div className="topmenu">
        <BsThreeDots className="dots" size="25" color="gray" />
      </div>
      <div className="pp">
        <img src={item.img} alt="" />
      </div>
      <p className="nama">{item.nama}</p>
      <div class="student">Student</div>
      <div className="line"></div>
      <div className="social"></div>
      <div className="location">
        <p className="info">
          <HiOutlineLocationMarker size="15" color="gray" />
          Location
        </p>
        <p>{item.address}</p>
      </div>
      <div className="location">
        <p className="info">
          <AiOutlinePhone size="15" color="gray" />
          Number
        </p>
        <p>{item.nim}</p>
      </div>
      <div className="location">
        <p className="info">
          <FiMail size="15" color="gray" />
          Email
        </p>
        <p>dummy@gmail.com</p>
      </div>
    </div>
  );
}

export default CardProfile;
