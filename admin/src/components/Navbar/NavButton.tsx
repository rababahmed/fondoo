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

  React.useEffect(() => setCurrentPath(router.pathname), []);

  return (
    <>
      <Link href={props.href}>
        <Box
          borderRadius="6"
          bgColor={currentPath === `${props.href}` ? "#0d0f15" : "gray.800"}
          _hover={{ bgColor: "gray.900", cursor: "pointer" }}
          py={2}
          px={4}
        >
          <HStack>
            <Icon as={props.icon} color="white" />
            <Text fontWeight="semibold" color="white">
              {props.text}
            </Text>
          </HStack>
        </Box>
      </Link>
    </>
  );
};

export default NavButton;
