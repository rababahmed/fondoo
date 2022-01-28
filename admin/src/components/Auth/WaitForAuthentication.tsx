import { useRouter } from "next/router";
import React from "react";
import { useUserStore } from "../../store/useUserStore";
import * as jwt from "jsonwebtoken";

const WaitForAuthentication = ({ children }: any) => {
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);
  const token = useUserStore((state) => state.token);
  const removeUser = useUserStore((state) => state.removeUser);

  console.log("TOKEN: " + token);

  const decoded = jwt.decode(token, { json: true });

  const isExpired = decoded?.exp < Date.now() / 1000;

  const router = useRouter();

  React.useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [router, isAuthenticated]);

  React.useEffect(() => {
    if (isAuthenticated && isExpired) {
      removeUser();
      router.push("/login");
    }
  }, [router, isAuthenticated, isExpired, removeUser]);

  return <>{isAuthenticated ? children : <div></div>}</>;
};

export default WaitForAuthentication;
