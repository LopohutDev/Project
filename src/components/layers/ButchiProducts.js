import React from "react";
import Butchi from "../Data/Butchi";
import "../../styles/custom.css";

function ButchiProducts(butchi) {
  return (
    <div className="flex flex-wrap mt-10">
      <Butchi
        img={"w-1/4 h-52 mx-5 rounded-lg shadow-2xl bg-white ube"}
        title={"Ube Butchi"}
      />
      <Butchi
        img={"w-1/4 h-52 mx-5 rounded-lg shadow-2xl bg-white cheese"}
        title={"Cheese Butchi"}
      />
      <Butchi
        img={"w-1/4 h-52 mx-5 rounded-lg shadow-2xl bg-white potato"}
        title={"potato Butchi"}
      />
    </div>
  );
}

export default ButchiProducts;
