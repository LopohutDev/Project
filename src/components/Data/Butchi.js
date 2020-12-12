import React from "react";

function Butchi(butchi) {
  return (
    <div className={butchi.img}>
      <div className="flex flex-col items-center h-full mt-5 ">
        <h1 className="w-32 text-2xl font-semibold text-center bg-gray-300 title">
          {butchi.title}
        </h1>
        <p className="w-16 text-xl font-semibold text-center text-red-500 bg-white">
          ₱ 150
        </p>
      </div>
    </div>
  );
}

export default Butchi;
