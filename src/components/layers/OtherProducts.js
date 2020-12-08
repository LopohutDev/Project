import React from "react";
import Other from "../Data/Other";

function OtherProducts(other) {
  return (
    <div>
      <div className="flex flex-wrap mt-10 ">
        <Other
          img={
            "w-1/4 h-52 mx-5 rounded-lg shadow-2xl bg-white macaroni active mt-10 "
          }
          title={"No-Bake Creamy Macaroni"}
          price={"₱150"}
        />
        <Other
          img={"w-1/4 h-52 mx-5 rounded-lg shadow-2xl bg-white bilobilo mt-10 "}
          title={"Bilo-Bilo with Langka"}
          price={"₱150"}
        />
        <Other
          img={"w-1/4 h-52 mx-5 rounded-lg shadow-2xl bg-white lasagna mt-10 "}
          title={"Creamy Lasagna"}
          price={"₱150"}
        />
        <Other
          img={
            "w-1/4 h-52 mx-5 rounded-lg shadow-2xl bg-white carbonara mt-10 "
          }
          title={"Creamy Carbonara"}
          price={"₱150"}
        />

        <Other
          img={"w-1/4 h-52 mx-5 rounded-lg shadow-2xl bg-white shanghai mt-10 "}
          title={"Shanghai Rolls (12pcs.)"}
          price={"₱150"}
        />
        <Other
          img={"w-1/4 h-52 mx-5 rounded-lg shadow-2xl bg-white graham mt-10 "}
          title={"Mango Graham"}
          price={"₱150"}
        />
      </div>
    </div>
  );
}

export default OtherProducts;
