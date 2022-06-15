import Script from "next/script";
import React from "react";
import IframeResizer from "iframe-resizer-react";

interface Props {
  data: any;
}

const Testimonials = ({ data }: Props) => {
  return (
    <section className="pt-20">
      <h2 className="font-cal text-center text-3xl md:text-4xl 2xl:text-5xl">
        These folks love us
      </h2>
      <IframeResizer
        src="https://embed.testimonial.to/w/fondoo?theme=light&card=base&loadMore=on&initialCount=20"
        style={{ width: "1px", minWidth: "100%" }}
      />
    </section>
  );
};

export default Testimonials;
