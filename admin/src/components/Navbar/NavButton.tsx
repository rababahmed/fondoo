import Icon from "@chakra-ui/icon";
import { Box, HStack, Text } from "@chakra-ui/layout";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaUser, FaUsers } from "react-icons/fa";

interface Nav {
  text: String;
  href: any;
  icon: any;
}

const NavButton = (props: Nav) => {
  const [active, setActive] = useState(false);

  const router = useRouter();
  const [currentPath, setCurrentPath] = React.useState("");

  React.useEffect(() => setCurrentPath(router.pathname), [router.pathname]);

  return (
    <>
      <Link href={props.href} passHref>
        <Box
          borderRadius="6"
          bgColor={currentPath === `${props.href}` ? "#ECECEC" : "#F6F6F7"}
          _hover={{
            bgColor: "#ECECEC",
            cursor: "pointer",
            color: "black",
          }}
          py={2}
          px={4}
        >
          <HStack>
            <Icon
              as={props.icon}
              color={
                currentPath === `${props.href}` ? "primary.900" : "gray.600"
              }
            />
            <Text
              fontWeight="semibold"
              color={currentPath === `${props.href}` ? "black" : "gray.600"}
            >
              {props.text}
            </Text>
          </HStack>
        </Box>
      </Link>
    </>
  );
};

export default NavButton;
