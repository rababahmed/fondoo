import Image from "next/image";
import React from "react";
import Container from "../blocks/Container";

interface Props {
  data: any;
}

const Customers = (props: Props) => {
  return (
    <>
      <section className="px-8 lg:px-56 2xl:px-96 pt-20">
        <h2 className="font-cal text-2xl text-center">
          Some of the cool local eateries on Fondoo
        </h2>
        <div className="flex justify-center">
          {props.data.data.body[0].items.map((item: any) => {
            return (
              <Image
                key={item.image.url}
                src={item.image.url}
                width={item.image.dimensions.width}
                height={item.image.dimensions.height}
                alt={item.image.alt}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Customers;
