import React from "react";

function Other(other) {
  return (
    <div className={other.img}>
      <img />
      <div className="flex flex-col items-center h-full mt-5">
        <h1 className="w-64 text-2xl font-semibold text-center bg-gray-300 title">
          {other.title}
        </h1>
        <p className="w-16 text-xl font-semibold text-center text-red-500 bg-white">
          {other.price}
        </p>
      </div>
    </div>
  );
}

export default Other;
