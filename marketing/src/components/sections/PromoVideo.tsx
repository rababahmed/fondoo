import Image from "next/image";
import React from "react";
import Container from "../blocks/Container";

interface Props {
  data: any;
}

const PromoVideo = (props: Props) => {
  return (
    <section className="">
      <div className="bg-top-wave bg-bottom bg-no-repeat -mb-5 pt-48">
        <Container>
          <h2 className="font-cal text-center text-5xl">
            {props.data.data.video_heading[0].text}
          </h2>
        </Container>
      </div>
      <div className="bg-wave">
        <Container>
          <div className="flex py-10 justify-center">
            <Image
              src={props.data.data.video_thumbnail.url}
              width={props.data.data.video_thumbnail.dimensions.width}
              height={props.data.data.video_thumbnail.dimensions.height}
              alt={props.data.data.video_thumbnail.alt}
            />
          </div>
          <div className="py-8 flex justify-evenly items-center">
            {props.data.data.body[1].items.map((item: any) => (
              <div
                key={item.title[0].text}
                className="flex flex-col justify-center items-center text-center"
              >
                {item.image.url ? (
                  <Image
                    src={item.image.url}
                    height={60}
                    width={60}
                    objectFit="contain"
                    alt={item.image.alt}
                  />
                ) : null}
                <h3 className="font-inter lg:text-xl font-bold">
                  {item.title[0].text}
                </h3>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default PromoVideo;
