import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useUserStore } from "../store/userStore";

const Home = () => {
  const router = useRouter();
  const user = useUserStore((state) => state.userID);

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    } else {
      router.push("/login");
    }
  }, [user]);

  return <div></div>;
};

export default Home;
