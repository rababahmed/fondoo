import React, { useEffect } from "react";
import { LoginModule } from "../modules/Login/LoginModule";
import { useUserStore } from "../store/useUserStore";
import { useRouter } from "next/router";

const LoginPage = () => {
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);

  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated === true) {
      router.push("/dashboard");
    }
  });

  return (
    <div>
      <LoginModule />
    </div>
  );
};

export default LoginPage;
