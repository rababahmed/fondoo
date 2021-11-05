import Icon from "@chakra-ui/icon";
import { Box, HStack, Text } from "@chakra-ui/layout";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaUser, FaUsers } from "react-icons/fa";
import styles from "./OrderButton.module.css";

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
        <Box
          borderRadius="6"
          bgColor={currentPath === `${props.href}` ? "primary.800" : "gray.900"}
          _hover={{ bgColor: "gray.700", cursor: "pointer" }}
          py={2}
          px={4}
        >
          <HStack>
            <Icon
              as={props.icon}
              color={currentPath === `${props.href}` ? "white" : "primary.800"}
            />
            <Text fontWeight="semibold" color="white">
              {props.text}
            </Text>
            <Box className={styles.ringContainer}>
              <Box className={styles.circle}></Box>
              <Box className={styles.ringring}></Box>
            </Box>
          </HStack>
        </Box>
      </Link>
    </>
  );
};

export default OrderButton;
