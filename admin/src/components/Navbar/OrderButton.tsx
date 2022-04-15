import Icon from "@chakra-ui/icon";
import { Box, HStack, Text } from "@chakra-ui/layout";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaUser, FaUsers } from "react-icons/fa";
import styles from "./OrderButton.module.css";
import { Flex } from "@chakra-ui/react";

interface Nav {
  text: String;
  href: any;
  icon: any;
}

const OrderButton = (props: Nav) => {
  const [active, setActive] = useState(false);

  const router = useRouter();
  const [currentPath, setCurrentPath] = React.useState("");

  React.useEffect(() => setCurrentPath(router.pathname), [router.pathname]);

  return (
    <>
      <Link href={props.href} passHref>
        <Flex
          align="center"
          borderRadius="6"
          bgColor={currentPath === `${props.href}` ? "primary.900" : "white"}
          _hover={{ cursor: "pointer", color: "primary.900" }}
          py={1}
          px={2}
          role="group"
        >
          <Icon
            mx="2"
            as={props.icon}
            color={currentPath === `${props.href}` ? "white" : "primary.700"}
            _groupHover={{
              color: currentPath === `${props.href}` ? "white" : "primary.900",
            }}
          />
          <Text
            fontWeight="semibold"
            color={currentPath === `${props.href}` ? "white" : "primary.700"}
            _groupHover={{
              color: currentPath === `${props.href}` ? "white" : "primary.900",
            }}
          >
            {props.text}
          </Text>
          <Box className={styles.ringContainer}>
            <Box className={styles.circle}></Box>
            <Box className={styles.ringring}></Box>
          </Box>
        </Flex>
      </Link>
    </>
  );
};

export default OrderButton;
