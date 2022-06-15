import type { NextPage } from "next";
import { NextSeo } from "next-seo";

import { createClient } from "../../prismicio";

import Container from "../components/blocks/Container";

import DefaultLayout from "../components/layouts/DefaultLayout";
import ReactMarkdown from "react-markdown";
import { TOSmd } from "../md/tosmd";
import { PrivacyMD } from "../md/privacymd";

const PrivacyPage = ({ data, navData }: any) => {
  return (
    <DefaultLayout data={data} navData={navData}>
      <NextSeo
        title={data.data.body1[0].items[0].title_tag[0].text}
        description={data.data.body1[0].items[0].meta_description[0].text}
        canonical="https://fondoo.io/privacy"
      />

      <Container>
        <h2 className="font-inter font-bold text-center text-3xl md:text-4xl 2xl:text-5xl py-8">
          Privacy Policy
        </h2>
        <ReactMarkdown>{PrivacyMD}</ReactMarkdown>
      </Container>
    </DefaultLayout>
  );
};

export const getStaticProps = async ({ previewData }: any) => {
  const client = createClient({ previewData });
  const data = await client.getSingle("homepage");
  const navData = await client.getSingle("navigation_menu");
  return {
    props: {
      data,
      navData,
    },
    revalidate: 60,
  };
};

export default PrivacyPage;
