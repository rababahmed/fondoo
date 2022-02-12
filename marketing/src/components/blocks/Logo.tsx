import React from "react";
import Image from "next/image";
import FondooLogo from "../../../public/images/fondoo-logo.png";

const Logo = ({ height }: any) => {
  return (
    <>
      <Image
        src={FondooLogo}
        alt="Fondoo Logo"
        height={height || 60}
        width={height || 180}
      />
    </>
  );
};

export default Logo;
