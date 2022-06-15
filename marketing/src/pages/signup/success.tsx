import { createClient } from "../../../prismicio";

import Container from "../../components/blocks/Container";

import DefaultLayout from "../../components/layouts/DefaultLayout";
import { useRouter } from "next/router";

declare global {
  interface Window {
    Reform: any;
  }
}

const SignupPage = ({ data, navData }: any) => {
  const router = useRouter();
  return (
    <DefaultLayout data={data} navData={navData}>
      <Container>
        <h2 className="font-inter font-bold text-center text-3xl md:text-4xl 2xl:text-5xl py-8">
          You are all set!
        </h2>
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
