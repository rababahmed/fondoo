import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Script from "next/script";

import { createClient } from "../../prismicio";

import Container from "../components/blocks/Container";

import DefaultLayout from "../components/layouts/DefaultLayout";

const SignupPage = ({ data, navData }: any) => {
  //empty commit

  console.log(data);
  return (
    <DefaultLayout data={data} navData={navData}>
      <NextSeo
        title={data.data.body1[0].items[0].title_tag[0].text}
        description={data.data.body1[0].items[0].meta_description[0].text}
        canonical="https://fondoo.io/signup"
        openGraph={{
          title: data.data.body1[0].items[0].title_tag[0].text,
          description: data.data.body1[0].items[0].meta_description[0].text,
          images: [
            {
              url: data.data.body1[0].items[0].open_graph_image.url,
              width:
                data.data.body1[0].items[0].open_graph_image.dimensions.width,
              height:
                data.data.body1[0].items[0].open_graph_image.dimensions.height,
              alt: data.data.body1[0].items[0].open_graph_image.alt,
            },
          ],
          type: "website",
        }}
      />

      <Container>
        <h2 className="font-inter font-bold text-center text-3xl md:text-4xl 2xl:text-5xl py-8">
          Sign up
        </h2>
        <div className="flex justify-center items-center">
          <div id="my-reform"></div>

          <Script
            id="reform-sizing"
            strategy="afterInteractive"
          >{`window.Reform=window.Reform||function(){(Reform.q=Reform.q||[]).push(arguments)};`}</Script>
          <Script
            id="reform-script"
            strategy="beforeInteractive"
            src="https://embed.reform.app/v1/embed.js"
          ></Script>
          <Script id="reform-init" strategy="afterInteractive">
            {`Reform('init', {
        url: 'https://forms.reform.app/PWcc6x/early-access/lxe2ws',
        target: '#my-reform',
        background: 'transparent',
    })`}
          </Script>
        </div>
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

export default SignupPage;
