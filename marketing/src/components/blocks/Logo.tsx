import React from "react";
import Image from "next/image";
import FondooLogo from "../../../public/images/fondoo-logo.png";
import FondooLogoDark from "../../../public/images/fondoo-logo-dark.png";

interface Props {
  height?: number;
  width?: number;
  dark?: boolean;
}

const Logo = ({ height, width, dark }: Props) => {
  return (
    <>
      <Image
        src={dark ? FondooLogoDark : FondooLogo}
        alt="Fondoo Logo"
        height={height || 60}
        width={width || 180}
      />
    </>
  );
};

export default Logo;
