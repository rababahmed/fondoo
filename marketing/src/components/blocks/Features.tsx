import Image from "next/image";
import React from "react";
import Container from "./Container";

interface Props {
  data: any;
}

const Features = (props: Props) => {
  return (
    <section>
      <Container>
        <div className="flex flex-col justify-center items-center">
          {props.data.data.body[4].items.map((item: any) =>
            item.orientation === 1 ? (
              <div
                key={item.title[0].text}
                className={
                  "flex flex-col md:flex-row justify-evenly items-center py-12"
                }
              >
                <div className="max-w-md">
                  <h1 className="font-cal text-4xl text-center px-12">
                    {item.title[0].text}
                  </h1>
                  <p className="font-inter font-medium text-center text-lg">
                    {item.body1[0].text}
                  </p>
                </div>
                <Image
                  src={item.image.url}
                  alt={item.title}
                  width={item.image.dimensions.width}
                  height={item.image.dimensions.height}
                />
              </div>
            ) : (
              <div
                key={item.title[0].text}
                className={
                  "flex flex-col md:flex-row justify-evenly items-center py-12"
                }
              >
                <Image
                  src={item.image.url}
                  alt={item.title}
                  width={item.image.dimensions.width}
                  height={item.image.dimensions.height}
                />
                <div className="max-w-md">
                  <h1 className="font-cal text-4xl text-center px-12">
                    {item.title[0].text}
                  </h1>
                  <p className="font-inter font-medium text-center text-lg">
                    {item.body1[0].text}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </Container>
    </section>
  );
};

export default Features;
