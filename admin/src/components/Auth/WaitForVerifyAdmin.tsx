import { useRouter } from "next/router";
import { useUserStore } from "../../store/useUserStore";

const WaitForVerifyAdmin = () => {
  const role = useUserStore((state) => state.role);

  const router = useRouter();

  if (role !== "Admin") {
    router.push("/dashboard");
  }
};

export default WaitForVerifyAdmin;
