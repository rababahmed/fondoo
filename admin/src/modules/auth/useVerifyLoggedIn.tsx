import { useRouter } from "next/router";
import { useEffect } from "react";
import { useUserStore } from "../../store/userStore";

export const useVerifyLoggedIn = () => {
  const { replace, asPath } = useRouter();
  const isLoggedIn = useUserStore((s) => !!s.userID);

  useEffect(() => {
    if (!isLoggedIn) {
      replace("/login");
    }
  }, [isLoggedIn, asPath, replace]);

  return isLoggedIn;
};
