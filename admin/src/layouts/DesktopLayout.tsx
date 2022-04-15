import { Box } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import React from "react";
import WaitForAuthentication from "../components/Auth/WaitForAuthentication";
import Header from "../components/Header/Header";
import NavBar from "../components/Navbar/NavBar";
import { usePrefStore } from "../store/usePrefStore";

const DesktopLayout = (props: any) => {
  const [isDesktop] = useMediaQuery("(min-width: 640px)");
  const isHamburgerOpen = usePrefStore((state) => state.hamburger);

  return (
    <>
      <WaitForAuthentication>
        {isDesktop ? (
          <Box as="section" bg="#F6F6F7" minH="100vh" minW="fit-content">
            <NavBar />
            <Header />
            <Box
              as="main"
              mt={14}
              ml={{ base: 0, md: 240 }}
              bg="#F6F6F7"
              py={10}
              px={10}
            >
              {props.children}
              <Box mb={24}></Box>
            </Box>
          </Box>
        ) : (
          <Box
            display="flex"
            pos="fixed"
            overflowY="auto"
            overflowX="auto"
            flexDirection="column"
            left="0"
            top="0"
            bg="#F6F6F7"
            w="100vw"
            h="100vh"
          >
            <Header />
            <Box
              mt={14}
              overflowX="auto"
              maxW="100%"
              py={8}
              px={8}
              ml={{ base: 0, md: 240 }}
              bg="#F6F6F7"
            >
              {props.children}
            </Box>
            {isHamburgerOpen ? <NavBar /> : null}
          </Box>
        )}
      </WaitForAuthentication>
    </>
  );
};

export default DesktopLayout;
