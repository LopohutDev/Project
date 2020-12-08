import React from "react";

function Other(other) {
  return (
    <div className={other.img}>
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-2xl font-semibold text-center ">{other.title}</h1>
        <p className="text-xl font-semibold text-red-500 bg-white opacity-80">
          {other.price}
        </p>
      </div>
    </div>
  );
}

export default Other;
