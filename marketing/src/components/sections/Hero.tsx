import Image from "next/image";
import React from "react";
import Container from "../blocks/Container";

interface Props {
  data: any;
}

const Hero = (props: Props) => {
  return (
    <>
      <section>
        <Container>
          <div className="pt-14 lg:pt-16">
            <h1 className="text-center text-5xl lg:text-7xl 2xl:text-8xl font-cal">
              {props.data.data.heading[0].text}
            </h1>
            <p className="text-center px-10 lg:px-20 py-4 lg:py-6 font-inter font-semibold text-gray-800 text-lg lg:text-xl">
              {props.data.data.subheading[0].text}
            </p>
            <div className="flex justify-center lg:px-20 lg:pt-4">
              <button className="bg-yellow-400 rounded-lg font-inter font-bold py-1 px-4 text-xl lg:text-2xl">
                {props.data.data.cta_text[0].text}
              </button>
            </div>
          </div>
        </Container>
      </section>
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
        <div className="bg-top-wave bg-top bg-no-repeat bg-cover pt-40 pb-10">
          <h1 className="font-cal text-center text-5xl text-gray-800">
            Say Hello to First-Party
          </h1>
        </div>
        <div className="lg:px-60 flex py-6 justify-center bg-wave">
          <Image src={BagelOrders} alt="Order Dashboard" />
        </div>
        <div className="bg-bottom-wave bg-bottom bg-no-repeat bg-cover pt-20 pb-40 flex justify-center">
          <div className="-m-12 flex justify-between">
            <h1 className="font-cal text-gray-800 text-center text-4xl px-20">
              Orders
            </h1>
            <h1 className="font-cal text-gray-800 text-center text-4xl px-20">
              Reservations
            </h1>
            <h1 className="font-cal text-gray-800 text-center text-4xl px-20">
              Data
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
