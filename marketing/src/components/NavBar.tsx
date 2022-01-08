import React from "react";

const NavBar = () => {
  return (
    <>
      <section className="bg-white px-20 py-4">
        <div className="flex justify-between">
          <div className="font-cal text-2xl">Bagel</div>
          <div className="flex">
            {/* <div className="px-2 py-1 font-inter font-bold text-lg cursor-pointer hover:underline">
              Home
            </div>
            <div className="px-2 py-1 font-inter font-bold text-lg cursor-pointer hover:underline">
              Pricing
            </div>
            <div className="px-2 py-1 font-inter font-bold text-lg cursor-pointer hover:underline">
              Support
            </div> */}
          </div>
          <div>
            <button className="bg-gray-800 rounded-lg font-inter font-bold py-1 px-4 text-white">
              Login
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavBar;
