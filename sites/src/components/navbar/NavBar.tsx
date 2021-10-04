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
import OrderButton from "../buttons/OrderButton";
import PrimaryButton from "../buttons/SecondaryButton";
import MobileNav from "./MobileNav";
import NavItem from "./NavItem";

const NavBar = ({ rdata, cdata }: any) => {
  const router = useRouter();

  const [isDesktop] = useMediaQuery("(min-width: 640px)");

  return (
    <>
      <Grid
        zIndex="10"
        bg="#353439"
        w="full"
        pos="sticky"
        top="0"
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
          <NavItem text="About" url="/about" />
          <NavItem text="Deals" url="/deals" />
          <NavItem text="Menu" url="/menu" />
          <NavItem text="Reservation" url="/reservation" />
          <NavItem text="Contact" url="/contact" />
        </Stack>
        <Stack
          display={{ base: "none", lg: "flex" }}
          spacing={2}
          direction="row"
          align="center"
        >
          <PrimaryButton cdata={cdata} text="SIGN IN" />
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
