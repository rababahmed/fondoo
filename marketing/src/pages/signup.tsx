import type { NextPage } from "next";
import { NextSeo } from "next-seo";

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
          <iframe
            src="https://tally.so/embed/wMo00m?alignLeft=1&hideTitle=1&transparentBackground=1"
            width={400}
            height={700}
            frameBorder="0"
            title="Fondoo Waitlist"
          ></iframe>
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
