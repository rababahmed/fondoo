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
    </>
  );
};

export default Hero;
