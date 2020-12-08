import React from "react";
import Jelly from "../Data/Jelly";

function JellyProducts(jelly) {
  return (
    <div>
      <div className="flex flex-wrap mt-10">
        <Jelly
          img={"w-1/4 h-52 mx-5 rounded-lg shadow-2xl bg-white mango "}
          title={"Mango Tapioca"}
          price={"₱150"}
        />
        <Jelly
          img={"w-1/4 h-52 mx-5 rounded-lg shadow-2xl bg-white buko "}
          title={"Buko Pandan Jelly"}
          price={"₱150"}
        />
        <Jelly
          img={"w-1/4 h-52 mx-5 rounded-lg shadow-2xl bg-white coffee "}
          title={"Coffee Jelly"}
          price={"₱120"}
        />
      </div>
    </div>
  );
}

export default JellyProducts;
