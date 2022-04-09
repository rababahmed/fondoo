import { Box, HStack, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import FondooLogo from "../../../public/images/fondoo-logo.png";
import { useRouter } from "next/router";

const FondooBadge = () => {
  const router = useRouter();

  const isOrderPage = router.pathname === "/[host]/order";

  return (
    <Link href="https://www.fondoo.io" isExternal>
      <Box
        display={[
          isOrderPage ? "none" : "block",
          isOrderPage ? "none" : "block",
          "block",
        ]}
        pos={"fixed"}
        bottom="0"
        right="0"
        p={[2, 4]}
        zIndex={20}
      >
        <Box
          py={2}
          px={2}
          display="flex"
          alignItems={"center"}
          bg={"black"}
          rounded="lg"
          shadow="sm"
        >
          <Image
            src={FondooLogo}
            alt="Fondoo Logo"
            width={24}
            height={24}
            layout="intrinsic"
          />
          <Text
            color="white"
            fontSize={"sm"}
            fontWeight={"normal"}
            fontFamily="TT Norms Pro Medium"
            pr={2}
          >
            Powered by Fondoo
          </Text>
        </Box>
      </Box>
    </Link>
  );
};

export default FondooBadge;
