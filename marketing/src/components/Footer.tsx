import Link from "next/link";
import React from "react";
import Container from "./blocks/Container";
import Logo from "./blocks/Logo";

interface Props {
  data: any;
}

const Footer = (props: Props) => {
  return (
    <section className="mt-10 bg-black">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 text-white justify-between items-center py-16">
          <div>
            <Logo dark={true} width={240} height={80} />
            <p className="font-inter font-medium text-sm text-white pt-4">
              Copyright © 2022 Fondoo, Inc. <br /> All Rights Reserved.
            </p>
          </div>
          <div className="flex flex-col font-inter font-semibold text-lg md:justify-self-center">
            <Link href="mailto:hello@fondoo.io">
              <a>Support</a>
            </Link>
            <Link href="/terms">
              <a>Terms of Service</a>
            </Link>
            <Link href="/privacy">
              <a>Privacy Policy</a>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
