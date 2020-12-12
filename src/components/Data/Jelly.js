import React from "react";

function Jelly(jelly) {
  return (
    <div className={jelly.img}>
      <div className="flex flex-col items-center h-full mt-5">
        <h1 className="w-48 text-2xl font-semibold text-center bg-gray-300 title">
          {jelly.title}
        </h1>
        <p className="w-16 text-xl font-semibold text-center text-red-500 bg-white ">
          {jelly.price}
        </p>
      </div>
    </div>
  );
}

export default Jelly;
