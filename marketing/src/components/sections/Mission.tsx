import { RichText } from "prismic-reactjs";
import React from "react";
import Container from "../blocks/Container";

interface Props {
  data: any;
}

const Mission = (props: Props) => {
  return (
    <section>
      <div className="bg-bottom-wave bg-top bg-no-repeat -mt-5 pt-96">
        <Container>
          <div className="bg-curved-line bg-bottom bg-no-repeat pb-12">
            <h2 className="font-cal text-center text-2xl md:text-5xl 2xl:text-6xl pt-4">
              {props.data.data.body[2].items[0].title[0].text}
            </h2>
            <p className="font-inter font-medium text-gray-800 text-center text-xl pt-4">
              <RichText render={props.data.data.body[3].items[0].paragraph} />
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Mission;
