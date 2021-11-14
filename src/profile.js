import React from "react";
import "./profile.css";

import CardProfile from "./cardprofile";

const member = [
  {
    nama: "Ade Ilham",
    nim: "21120119130091",
    img: "https://images.unsplash.com/photo-1514794749374-fb67509dbb7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    address: "Semarang, Indonesia",
  },
  {
    nama: "Mudzik Al Fahri",
    nim: "21120119130100",
    img: "https://images.unsplash.com/photo-1576110598658-096ae24cdb97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    address: "Yogyakarta, Indonesia",
  },
  {
    nama: "Rasyad Akmal",
    nim: "21120119130101",
    img: "https://images.unsplash.com/photo-1606213452632-ff4c6032e7eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    address: "Jakarta, Indonesia",
  },
  {
    nama: "Maki Adnin",
    nim: "21120119140146",
    img: "https://images.unsplash.com/photo-1544728397-e9f8875bd5fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    address: "Surabaya, Indonesia",
  },
];

function Profile() {
  return (
    <div className="containprofile">
      <h1>Profile</h1>
      <div className="containcard">
        {member.map((per, idx) => (
          <CardProfile key={idx} item={per} />
        ))}
      </div>
    </div>
  );
}
export default Profile;
