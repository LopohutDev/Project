import React from "react";
import ButchiProducts from "./layers/ButchiProducts";
import JellyProducts from "./layers/JellyProducts";
import OtherProducts from "./layers/OtherProducts";

function Products() {
  return (
    <div className="max-w-6xl mx-auto mt-24 text-left ">
      <h1 className="text-6xl font-semibold">Our Products.</h1>
      <div className="mt-16">
        <h2 className="text-3xl font-semibold">Butchi Variants</h2>
        <ButchiProducts />
      </div>
      <div className="mt-16">
        <h2 className="text-3xl font-semibold">Jelly Desserts</h2>
        <JellyProducts />
      </div>
      <div className="mt-16">
        <h2 className="text-3xl font-semibold">Other Products</h2>
        <OtherProducts />
      </div>
    </div>
  );
}

export default Products;
