import { useRouter } from "next/router";
import React from "react";
import { useUserStore } from "../../store/useUserStore";

const WaitForAuthentication = (props: any) => {
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);

  const router = useRouter();

  React.useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [router, isAuthenticated]);

  return <>{isAuthenticated ? props.children : null}</>;
};

export default WaitForAuthentication;
