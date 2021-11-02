import { IconButton } from "@chakra-ui/button";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { useRouter } from "next/router";
import React from "react";
import LoginModal from "../../modules/auth/LoginModal";
import { useUserStore } from "../../stores/useUserStore";
import OrderButton from "../buttons/OrderButton";
import SecondaryButton from "../buttons/SecondaryButton";
import NavItem from "../navbar/NavItem";
import { Box, Divider, Stack } from "@chakra-ui/react";

const MobileNav = ({ cdata, rdata }: any) => {
  const router = useRouter();
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Navigation Menu"
        rounded="md"
        bg={cdata.primaryColor}
        color="white"
        _hover={{ opacity: "0.9" }}
        icon={<HamburgerIcon />}
      />
      <MenuList p={6}>
        <Stack>
          <NavItem
            text="Home"
            url="/"
            cdata={cdata}
            navItemProps={{ fontSize: "lg", fontWeight: "semibold" }}
          />
          <NavItem
            text="About"
            url="/about"
            cdata={cdata}
            navItemProps={{ fontSize: "lg", fontWeight: "semibold" }}
          />
          <NavItem
            text="Deals"
            url="/deals"
            cdata={cdata}
            navItemProps={{ fontSize: "lg", fontWeight: "semibold" }}
          />
          <NavItem
            text="Menu"
            url="/menu"
            cdata={cdata}
            navItemProps={{ fontSize: "lg", fontWeight: "semibold" }}
          />
          {/* <NavItem
            text="Reservation"
            url="/reservation"
            cdata={cdata}
            navItemProps={{ fontSize: "lg", fontWeight: "semibold" }}
          /> */}
          <NavItem
            text="Contact"
            url="/contact"
            cdata={cdata}
            navItemProps={{ fontSize: "lg", fontWeight: "semibold" }}
          />
        </Stack>
        <Box p={4}>
          <Divider />
        </Box>
        <Stack>
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
      </MenuList>
    </Menu>
  );
};

export default MobileNav;
