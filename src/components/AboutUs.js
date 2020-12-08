import React from "react";
function AboutUs() {
  return (
    <div className="h-screen">
      <div className="h-24 bg-green-500"></div>
      <div className="flex max-w-4xl p-10 mx-auto mt-32 bg-white shadow-2xl rounded-3xl">
        <div className="w-2/3 mx-2">
          <h1 className="text-3xl font-semibold text-left">About us?</h1>
          <hr className="my-3 border border-gray-400" />
          <p className="text-lg">
            We make home-made Filipino merienda and other Filipino dishes that
            are made to order upon your request. Try our original recipe of
            Monggo, Ube, and Ube with Cheese Buchi that will surely satisfy your{" "}
            {""}
            <span className="p-0.5 bg-blue-300 rounded-sm ">
              #MeriendaCravings
            </span>
            !
          </p>
        </div>
        <div className="w-1/4 p-1 mx-2 font-semibold map">
          {" "}
          Our Business Location:
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
