import React from "react";
import Container from "./Container";
import { RichText } from "prismic-reactjs";
import { useRouter } from "next/router";

interface Props {
  data: any;
}

const Pricing = (props: Props) => {
  const router = useRouter();

  return (
    <section id="pricing" className="pt-20">
      <Container>
        <h2 className="font-cal text-center text-3xl md:text-5xl 2xl:text-6xl pt-8">
          {props.data.data.body[5].items[0].title[0].text}
        </h2>
        <p className="font-inter font-medium text-center text-gray-900 text-md md:px-48 pt-4">
          {props.data.data.body[6].items[0].paragraph[0].text}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-start pt-4 gap-6 md:gap-0">
          {props.data.data.body[7].items.map((item: any) => (
            <div key={item.title[0].text} className="">
              <div
                className={
                  item.title[0].text === "Starter"
                    ? "flex flex-col border-yellow border-2 rounded-md pl-8 pr-16 py-10 2xl:py-20 m-2"
                    : "flex flex-col bg-yellow rounded-md pl-8 pr-16 py-10 2xl:py-20 m-2" &&
                      item.title[0].text === "Enterprise"
                    ? "flex flex-col bg-black border-2 rounded-md pl-8 pr-16 py-10 2xl:py-20 m-2 text-white"
                    : "flex flex-col bg-yellow rounded-md pl-8 pr-16 py-10 2xl:py-20 m-2"
                }
              >
                <h3 className="font-cal text-3xl pt-4 pb-2">
                  {item.title[0].text}
                </h3>
                <p className="font-inter font-medium text-md pb-4 ">
                  {item.sub_title[0].text}
                </p>
                <p className="font-inter font-semibold text-md">
                  {item.title[0].text !== "Enterprise"
                    ? `$${item.price} /month`
                    : "Custom"}
                </p>
                {item.title[0].text !== "Enterprise" ? (
                  <div className="flex justify-start items-center mt-3 ">
                    <button
                      onClick={() => router.push(props.data.data.cta_link.url)}
                      className="bg-black rounded-lg font-inter font-semibold py-1 px-2 md:px-4 text-white hover:bg-gray-800"
                    >
                      Try Free
                    </button>
                  </div>
                ) : (
                  <div className="flex justify-start items-center mt-3 ">
                    <button
                      onClick={() => router.push(props.data.data.cta_link.url)}
                      className="bg-black rounded-lg font-inter font-semibold py-1 px-2 md:px-4 text-white hover:bg-white hover:text-black"
                    >
                      Contact us
                    </button>
                  </div>
                )}
              </div>
              <p className="font-medium font-inte px-4">
                <RichText render={item.features} />
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
