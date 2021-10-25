import { useRouter } from "next/router";
import React from "react";
import { useUserStore } from "../../stores/useUserStore";
import { useSiteStore } from "../../stores/useSiteStore";
import LoginModal from "../../modules/auth/LoginModal";
import DefaultLayout from "../../layouts/DefaultLayout";
import Header from "../card/Header";

const WaitForAuthentication = ({ children }: any) => {
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);
  const setLoginModal = useSiteStore((state) => state.setLoginModal);

  const router = useRouter();

  React.useEffect(() => {
    if (!isAuthenticated) {
      setLoginModal(true);
      router.back();
    }
  }, [router, isAuthenticated, setLoginModal]);

  return <>{isAuthenticated ? children : null}</>;
};

export default WaitForAuthentication;
