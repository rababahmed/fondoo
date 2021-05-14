import { useRouter } from "next/router";
import React, { useContext } from "react";
import { useVerifyLoggedIn } from "./useVerifyLoggedIn";

interface WaitForAuthProps {}

export const WaitForAuth: React.FC<WaitForAuthProps> = ({ children }) => {
  const router = useRouter();

  if (!useVerifyLoggedIn()) {
    return null;
  }

  return <>{children}</>;
};
