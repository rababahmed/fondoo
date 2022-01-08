import Image from "next/image";
import React from "react";
import BagelOrders from "../../../public/images/bagel-orders.png";

const Hero = () => {
  return (
    <>
      <div className="pt-14 lg:pt-16 lg:px-60">
        <h1 className="text-center text-5xl lg:text-7xl font-cal">
          The All-In-One Toolkit for First-Party Sales
        </h1>
        <p className="text-center px-10 lg:px-20 py-4 lg:py-6 font-inter font-semibold text-gray-800 text-lg lg:text-xl">
          Before <span className="font-cal text-black text-2xl">Bagel</span>:
          Projects feel scattered, things slip, it’s tough to see where things
          stand, and people are stressed. After{" "}
          <span className="font-cal text-black text-2xl">Bagel</span>:
          Everything’s organized in one place, you’re on top of things, progress
          is clear, and a sense of calm sets in.
        </p>
        <div className="flex justify-center lg:px-20 lg:pt-4">
          <button className="bg-yellow-400 rounded-lg font-inter font-bold py-1 px-4 text-xl lg:text-2xl">
            Give Bagel a Try
          </button>
        </div>
      </div>
      <div className="">
        <div className="spacer top-wave"></div>
        <div className="bg-wave">
          <h1 className="font-cal py-4 text-center text-5xl">
            Say Hello to First-Party
          </h1>
          <div className=" lg:px-60 flex py-6 justify-center">
            <Image src={BagelOrders} alt="Order Dashboard" />
          </div>
        </div>
        <div className="spacer bottom-wave"></div>
      </div>
    </>
  );
};

export default Hero;
