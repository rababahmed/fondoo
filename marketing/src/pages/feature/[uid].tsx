import React from "react";
import { createClient } from "../../../prismicio";
import * as prismicH from "@prismicio/helpers";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import { PrismicRichText } from "@prismicio/react";
import Container from "../../components/blocks/Container";
import { RichText } from "prismic-reactjs";
import Link from "next/link";
import Image from "next/image";
import Testimonials from "../../components/sections/Testimonials";
import CTA from "../../components/blocks/CTA";
import { NextSeo } from "next-seo";

const FeaturePage = ({ doc, data, navData }: any) => {
  console.log(doc);
  return (
    <DefaultLayout data={doc} navData={navData}>
      <NextSeo
        title={doc.data.title_tag[0].text}
        description={doc.data.meta_description[0].text}
        canonical={"https://fondoo.io" + doc.url}
        openGraph={{
          title: doc.data.title_tag,
          description: doc.data.meta_description,
          images: [
            {
              url: doc.data.open_graph_image.url,
              width: doc.data.open_graph_image.dimensions.width,
              height: doc.data.open_graph_image.dimensions.height,
              alt: doc.data.open_graph_image.alt,
            },
          ],
          type: "website",
        }}
      />
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
      <section className="">
        <div className="bg-top-wave bg-bottom bg-no-repeat -mb-5 pt-48">
          <Container>
            <h2 className="font-cal text-center text-3xl md:text-5xl 2xl:text-6xl">
              Features
            </h2>
          </Container>
        </div>
        <div className="bg-wave">
          <Container>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-10 lg:gap-20 py-24">
                {doc.data.body1[1].items.map((item: any) => (
                  <div
                    key={item.text[0].text}
                    className="flex flex-col justify-center items-center"
                  >
                    <Image
                      src={item.image.url}
                      alt={item.image.alt}
                      width={60}
                      height={60}
                      layout="fixed"
                    />
                    <p className="font-inter text-center font-bold lg:text-xl">
                      {item.text[0].text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </section>
      <section>
        <div className="bg-bottom-wave bg-top bg-no-repeat -mt-5 pt-96">
          <Container>
            <div className="">
              <h2 className="font-cal text-center text-3xl md:text-5xl 2xl:text-6xl">
                How it works
              </h2>
              <div className="flex flex-col mt-10 lg:flex-row">
                {doc.data.body1[2].items.map((item: any) => (
                  <div
                    key={item.title[0].text}
                    className="flex flex-col mt-10 justify-center items-center lg:mx-12"
                  >
                    <div className="border-2 border-black p-8 rounded-lg ">
                      <Image
                        src={item.image.url}
                        alt={item.image.alt}
                        width={80}
                        height={80}
                        layout="fixed"
                      />
                    </div>
                    <div className="mt-6 mb-10">
                      <h4 className="font-cal text-center text-xl 2xl:text-2xl">
                        {item.title[0].text}
                      </h4>
                      <p className="font-inter font-semibold text-center px-20 lg:px-2">
                        {item.body[0].text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="font-inter font-medium text-gray-800 text-center text-xl pt-4"></p>
          </Container>
        </div>
      </section>
      <Testimonials data={doc} />
      <CTA data={data} />
    </DefaultLayout>
  );
};

export async function getStaticProps({ params, previewData }: any) {
  const client = createClient({ previewData });
  const doc = (await client.getByUID("feature_page", params.uid)) || {};
  const data = await client.getSingle("homepage");
  const navData = await client.getSingle("navigation_menu");

  return {
    props: {
      doc,
      data,
      navData,
    },
    revalidate: 60,
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
