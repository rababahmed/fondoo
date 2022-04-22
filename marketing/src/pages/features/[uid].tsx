import React from "react";
import { createClient } from "../../../prismicio";
import * as prismicH from "@prismicio/helpers";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import { PrismicRichText } from "@prismicio/react";
import Container from "../../components/blocks/Container";
import { RichText } from "prismic-reactjs";
import Link from "next/link";
import Image from "next/image";

const FeaturePage = ({ doc }: any) => {
  console.log(doc);
  return (
    <DefaultLayout data={doc}>
      <section>
        <Container>
          <div className="pt-14 lg:pt-16">
            <h1 className="text-center text-5xl lg:text-7xl 2xl:text-8xl font-cal">
              {doc.data.body1[0].primary.title[0].text}
            </h1>
            <p className="text-center px-10 lg:px-20 py-4 lg:py-6 font-inter font-semibold text-gray-800 text-lg lg:text-xl">
              {doc.data.body1[0].primary.subtitle[0].text}
            </p>
            <div className="flex justify-center lg:px-20 lg:pt-4">
              <Link href={doc.data.body1[0].primary.cta_link.url}>
                <a>
                  <button className="bg-yellow rounded-lg font-inter font-bold py-1 px-4 text-xl lg:text-2xl">
                    {doc.data.body1[0].primary.cta_text[0].text}
                  </button>
                </a>
              </Link>
            </div>
            <div className="mt-10 pb-10 bg-gradient-to-t from-white">
              <div className="mix-blend-overlay">
                <Image
                  src={doc.data.body1[0].primary.image.url}
                  width={doc.data.body1[0].primary.image.dimensions.width}
                  height={doc.data.body1[0].primary.image.dimensions.height}
                  alt={doc.data.body1[0].primary.image.alt}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </DefaultLayout>
  );
};

export async function getStaticProps({ params, previewData }: any) {
  const client = createClient({ previewData });
  const doc = (await client.getByUID("feature_page", params.uid)) || {};

  return {
    props: {
      doc,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();
  const documents = await client.getAllByType("feature_page");

  console.log(documents);
  return {
    paths: documents.map((doc) => prismicH.asLink(doc)),
    fallback: "blocking",
  };
}

export default FeaturePage;
