import React from "react";

function Jelly(jelly) {
  return (
    <div className={jelly.img}>
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-2xl font-semibold text-center">{jelly.title}</h1>
        <p className="text-xl font-semibold text-red-500 bg-white opacity-80">
          {jelly.price}
        </p>
      </div>
    </div>
  );
}

export default Jelly;
