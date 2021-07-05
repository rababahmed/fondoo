import { Box } from "@chakra-ui/layout";
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
          <Box
            display="flex"
            pos="fixed"
            overflowY="auto"
            overflowX="hidden"
            flexDirection="column"
            left="0"
            top="0"
            bg="gray.50"
            w="100vw"
            h="100vh"
          >
            <Box
              mt={14}
              w="100%"
              pos="fixed"
              h="100vh"
              overflowX="hidden"
              py={8}
              px={44}
              ml={isHamburgerOpen ? 134 : 0}
              bg="gray.50"
            >
              {props.children}
              <Box mb={24}></Box>
            </Box>
            <Header />
            <NavBar />
          </Box>
        ) : (
          <Box
            display="flex"
            pos="fixed"
            overflowY="auto"
            overflowX="hidden"
            flexDirection="column"
            left="0"
            top="0"
            bg="gray.50"
            w="100vw"
            h="100vh"
          >
            <Header />
            <Box
              mt={14}
              overflowX="hidden"
              maxW="100%"
              py={8}
              px={8}
              ml={isHamburgerOpen ? 260 : 0}
              bg="gray.50"
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
