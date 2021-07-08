import { Box, Button, Grid, Img, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { Constants } from "../../config";
import OrderButton from "../buttons/OrderButton";
import PrimaryButton from "../buttons/PrimaryButton";
import NavItem from "./NavItem";

const NavBar = ({ rdata, cdata }: any) => {
  const router = useRouter();

  return (
    <>
      <Box bg="#353439" w="100%">
        <Grid templateColumns="8fr 2fr 2fr">
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
            ml={20}
            alt="logo"
          />
          <Stack spacing={3} direction="row" align="center" mr={6}>
            <NavItem text="About" url="/about" />
            <NavItem text="Deals" url="/deals" />
            <NavItem text="Menu" url="/menu" />
            <NavItem text="Reservation" url="/reservation" />
            <NavItem text="Reviews" url="/reviews" />
            <NavItem text="Contact" url="/contact" />
          </Stack>
          <Stack spacing={2} direction="row" align="center" mr={20}>
            <PrimaryButton cdata={cdata} text="SIGN IN" />
            <OrderButton cdata={cdata} text="ORDER NOW" />
          </Stack>
        </Grid>
      </Box>
    </>
  );
};

export default NavBar;
