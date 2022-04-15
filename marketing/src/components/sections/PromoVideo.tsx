import { Dialog } from "@headlessui/react";
import Image from "next/image";
import React, { useState } from "react";
import Container from "../blocks/Container";
import { Modal } from "../blocks/Modal";

interface Props {
  data: any;
}

const PromoVideo = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <section className="">
      <div className="bg-top-wave bg-bottom bg-no-repeat -mb-5 pt-48">
        <Container>
          <h2 className="font-cal text-center text-3xl md:text-5xl 2xl:text-6xl">
            {props.data.data.video_heading[0].text}
          </h2>
        </Container>
      </div>
      <div className="bg-wave">
        <Container>
          <div
            className="flex py-10 justify-center cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Image
              src={props.data.data.video_thumbnail.url}
              width={props.data.data.video_thumbnail.dimensions.width}
              height={props.data.data.video_thumbnail.dimensions.height}
              alt={props.data.data.video_thumbnail.alt}
            />
          </div>
          <div className="py-8 flex justify-evenly items-center gap-4 md:gap-0">
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
                <h3 className="font-inter text-sm md:text-xl font-bold">
                  {item.title[0].text}
                </h3>
              </div>
            ))}
          </div>
        </Container>
      </div>
      <Dialog
        as="div"
        open={isOpen}
        onClose={closeModal}
        className="fixed inset-0 z-10 overflow-y-auto"
      >
        <div className="min-h-screen px-4 text-center">
          <Dialog.Overlay className="fixed inset-0" />
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div className="inline-block w-max p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
            <iframe
              width="840"
              height="472"
              src="https://www.youtube.com/embed/g021E_xfWcA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Dialog>
    </section>
  );
};

export default PromoVideo;
