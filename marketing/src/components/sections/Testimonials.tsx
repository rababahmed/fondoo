import Script from "next/script";
import React from "react";

interface Props {
  data: any;
}

const Testimonials = ({ data }: Props) => {
  return (
    <section className="pt-20">
      <h2 className="font-cal text-center text-2xl md:text-4xl 2xl:text-5xl">
        Wall of Love
      </h2>
      <Script
        src="https://testimonial.to/js/iframeResizer.min.js"
        strategy="beforeInteractive"
      />
      <iframe
        id="testimonialto-fondoo-light"
        src="https://embed.testimonial.to/w/fondoo?theme=light&card=base&loadMore=on&initialCount=20"
        scrolling="no"
        width="100%"
      ></iframe>
      <Script
        id="testimonialto-fondoo"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `iFrameResize({log: false, checkOrigin: false}, "#testimonialto-fondoo-light");`,
        }}
      ></Script>
    </section>
  );
};

export default Testimonials;
