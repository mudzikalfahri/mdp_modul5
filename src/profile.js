import React from "react";
import "./profile.css";

const member = [
  {
    nama: "Mudzik Al Fahri",
    nim: "21120119130100",
  },
  {
    nama: "Mudzik Al Fahri",
    nim: "21120119130100",
  },
  {
    nama: "Mudzik Al Fahri",
    nim: "21120119130100",
  },
  {
    nama: "Mudzik Al Fahri",
    nim: "21120119130100",
  },
];

function Profile() {
  return (
    <div className="containprofile">
      <h1>Profile</h1>
      <div className="containcard">
        {member.map((per, idx) => (
          <div className="cardprofile" key={idx}>
            <div className="topmenu"></div>
            <p>{per.nama}</p>
            <p>{per.nim}</p>
            <div className="social"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Profile;
