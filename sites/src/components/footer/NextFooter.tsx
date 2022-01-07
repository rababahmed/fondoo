import React from "react";
import { Constants } from "../../config";

interface Props {
  rdata: any;
  cdata: any;
}

const NextFooter = ({ rdata, cdata }: Props) => {
  return <>{cdata.customFooterTags}</>;
};

export default NextFooter;
