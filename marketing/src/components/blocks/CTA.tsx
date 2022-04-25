import { useRouter } from "next/router";
import React from "react";
import Container from "./Container";

interface Props {
  data: any;
}

const CTA = ({ data }: Props) => {
  const router = useRouter();

  return (
    <>
      <Container>
        <div className="mt-12 bg-yellow rounded-lg flex justify-between p-6 lg:p-12 gap-4">
          <div className="mr-10">
            <p className="font-cal text-3xl lg:text-5xl mb-4">
              Try free for 30 days.
            </p>
            <p className="font-inter font-semibold text-sm lg:text-lg">
              Take the platform for a spin. No commitment and no credit card
              required.
            </p>
          </div>
          <div className="flex justify-end items-center">
            <button
              onClick={() => router.push(data.data.cta_link.url)}
              className="truncate mx-1 bg-black rounded-lg font-inter font-bold py-2 px-4 lg:py-4 lg:px-8 text-white hover:bg-gray-800 text-lg lg:text-xl"
            >
              Try Free
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CTA;
