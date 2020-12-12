import React from "react";
import Danica from "../../images/Danica.jpg";
import Adrian from "../../images/Adrian.jpg";
import Genecis from "../../images/Suriaga.jpg";
import Louie from "../../images/Louie.jpg";
import Denise from "../../images/Denise.jpg";

function Team() {
  return (
    <div className="justify-between mx-auto mt-10 max-w-7xl">
      <h1 className="text-5xl font-bold">Team</h1>
      <div className="flex">
        <div className="w-1/5 h-64 p-5 m-5 text-center bg-white shadow-xl rounded-3xl">
          <div className="w-full h-48">
            <img className="w-full h-full" src={Danica} alt="photo" />
          </div>
          <h1 className="text-xl">Danica Tongo</h1>
        </div>
        <div className="w-1/5 h-64 p-5 m-5 text-center bg-white shadow-xl rounded-3xl">
          <div className="w-full h-48">
            <img className="w-full h-full" src={Adrian} alt="photo" />
          </div>
          <h1 className="text-xl">Adrian Artugue</h1>
        </div>
        <div className="w-1/5 h-64 p-5 m-5 text-center bg-white shadow-xl rounded-3xl">
          <div className="w-full h-48">
            <img className="w-full h-full" src={Genecis} alt="photo" />
          </div>
          <h1 className="text-xl">Genecis Suriaga</h1>
        </div>
        <div className="w-1/5 h-64 p-5 m-5 text-center bg-white shadow-xl rounded-3xl">
          <div className="w-full h-48">
            <img className="w-full h-full" src={Louie} alt="photo" />
          </div>
          <h1 className="text-xl">Louie Jay Sarraga</h1>
        </div>
        <div className="w-1/5 h-64 p-5 m-5 text-center bg-white shadow-xl rounded-3xl">
          <div className="w-full h-48">
            <img className="w-full h-full" src={Denise} alt="photo" />
          </div>
          <h1 className="text-xl">Denise Claire Doronila</h1>
        </div>
      </div>
    </div>
  );
}

export default Team;
