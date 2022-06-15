import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  IconButton,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { Constants } from "../../config";
import LoginModal from "../../modules/auth/LoginModal";
import { useUserStore } from "../../stores/useUserStore";
import OrderButton from "../buttons/OrderButton";
import SecondaryButton from "../buttons/SecondaryButton";
import PrimaryButton from "../buttons/SecondaryButton";
import MobileNav from "./MobileNav";
import NavItem from "./NavItem";
import Image from "next/image";
import SignupModal from "../../modules/auth/SignupModal";

const NavBar = ({ rdata, cdata }: any) => {
  const router = useRouter();
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);

  const isOrderPage = router.pathname == "/order";

  return (
    <>
      <Flex
        zIndex="10"
        bg={cdata.hasDarkNavBg ? "#353439" : "white"}
        w="full"
        pos={"sticky"}
        top="0"
        border={cdata.hasDarkNavBg ? "0px" : "1px"}
        borderColor={cdata.hasDarkNavBg ? "transparent" : "gray.100"}
        shadow={"sm"}
        // templateColumns={{ base: "2fr 2fr", md: "8fr 2fr" }}
        px={{ base: 8, md: 36, "2xl": 72 }}
        justifyContent={"space-between"}
      >
        <Box
          pos="relative"
          w={{ base: "40%", md: "20%" }}
          h={20}
          cursor={"pointer"}
        >
          <Image
            onClick={() => router.push("/")}
            src={
              rdata.logo
                ? Constants.CDN + rdata.logo
                : "https://via.placeholder.com/500x200/ffffff/2e2e2e.png?text=Your+Logo+Here"
            }
            layout="fill"
            objectFit="contain"
            alt="logo"
          />
        </Box>

        <Stack
          display={{ base: "none", lg: "flex" }}
          spacing={3}
          direction="row"
          align="center"
          mr={6}
        >
          <NavItem text="About" url="/about" cdata={cdata} />
          <NavItem text="Deals" url="/deals" cdata={cdata} />
          <NavItem text="Menu" url="/menu" cdata={cdata} />
          {/* <NavItem text="Reservation" url="/reservation" cdata={cdata} /> */}
          <NavItem text="Contact" url="/contact" cdata={cdata} />

          {isAuthenticated ? (
            <SecondaryButton
              cdata={cdata}
              text="MY ACCOUNT"
              onClick={() => router.push("/my-account")}
            />
          ) : (
            <>
              <LoginModal rdata={rdata} cdata={cdata} />
              <SignupModal rdata={rdata} cdata={cdata} />
            </>
          )}
          <OrderButton cdata={cdata} text="ORDER NOW" url="/order" />
        </Stack>
        <Box
          display={{ base: "block", lg: "none" }}
          alignSelf="center"
          justifySelf="right"
        >
          <MobileNav cdata={cdata} />
        </Box>
      </Flex>
    </>
  );
};

export default NavBar;
