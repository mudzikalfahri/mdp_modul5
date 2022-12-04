import React from "react";

function index() {
  return (
    <div className="text-center flex flex-col justify-center items-center gap-2 min-h-screen">
      <h1 className="text-5xl font-bold">WEFOOTWEAR API</h1>
      <p className="text-2xl font-semibold">How to use</p>
      <div className="">
        <h2>Get all items</h2>
        <p>GET /api/items</p>
      </div>
      <div className="">
        <h2>Get single item</h2>
        <p>GET /api/items/:id</p>
      </div>
      <div className="">
        <h2>Get all items by category</h2>
        <p>GET /api/items/category/:category</p>
      </div>
      <div className="">
        <h2>Get filtered items by field</h2>
        <p>GET /api/items?field=value</p>
      </div>
    </div>
  );
}

export default index;
