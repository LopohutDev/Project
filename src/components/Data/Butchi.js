import React from "react";

function Butchi(butchi) {
  return (
    <div className={butchi.img}>
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-2xl font-semibold title">{butchi.title}</h1>
        <p className="text-xl font-semibold text-red-500 bg-white opacity-80">
          ₱ 150
        </p>
      </div>
    </div>
  );
}

export default Butchi;
