import React from "react";
import "../styles/custom.css";

function Body() {
  return (
    <div className="flex items-center justify-center h-screen bg-fixed bg-blue-500 homebg">
      {/* card */}
      <div className="max-w-xs p-4 text-center bg-white rounded">
        <h1 className="mb-2 text-2xl text-left">Good Morning!</h1>
        <p className="mb-10 text-5xl text-left">
          Let's find what food you are looking for.
        </p>
        <div className="flex flex-col ">
          <input
            className="h-8 p-2 mb-5 border border-green-500 rounded "
            type="text"
            placeholder="Search Food"
          />
          <button className="h-10 bg-green-500 rounded-lg ">Search</button>
        </div>
      </div>
    </div>
  );
}

export default Body;
