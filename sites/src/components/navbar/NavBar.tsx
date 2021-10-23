import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Img,
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

const NavBar = ({ rdata, cdata }: any) => {
  const router = useRouter();
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);

  const isOrderPage = router.pathname == "/order";

  const [isDesktop] = useMediaQuery("(min-width: 640px)");

  return (
    <>
      <Grid
        zIndex="10"
        bg={cdata.hasDarkNavBg ? "#353439" : "white"}
        w="full"
        pos={"sticky"}
        top="0"
        border={"1px"}
        borderColor={"gray.100"}
        shadow={"sm"}
        templateColumns={{ base: "4fr 4fr", md: "8fr 2fr 2fr" }}
        px={{ base: 8, md: 72 }}
      >
        <Img
          onClick={() => router.push("/")}
          _hover={{ cursor: "pointer" }}
          src={
            rdata.logo
              ? Constants.CDN + rdata.logo
              : "https://via.placeholder.com/500x200/ffffff/2e2e2e.png?text=Your+Logo+Here"
          }
          h={20}
          p={2}
          alt="logo"
        />
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
          <NavItem text="Reservation" url="/reservation" cdata={cdata} />
          <NavItem text="Contact" url="/contact" cdata={cdata} />
        </Stack>
        <Stack
          display={{ base: "none", lg: "flex" }}
          spacing={2}
          direction="row"
          align="center"
        >
          {isAuthenticated ? (
            <SecondaryButton
              cdata={cdata}
              text="MY ACCOUNT"
              onClick={() => router.push("/my-account")}
            />
          ) : (
            <LoginModal rdata={rdata} cdata={cdata} />
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
      </Grid>
    </>
  );
};

export default NavBar;
