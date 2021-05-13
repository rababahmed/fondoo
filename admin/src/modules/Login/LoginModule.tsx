import {
  Box,
  Button,
  Center,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import * as React from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Card } from "./Card";
import { DividerWithText } from "./DividerWithText";
import { Link } from "./Link";
import { LoginForm } from "./LoginForm";

export const LoginModule = () => (
  <Box
    bg={useColorModeValue("gray.50", "inherit")}
    minH="100vh"
    py="36"
    px={{ base: "4", lg: "8" }}
  >
    <Heading
      fontSize={48}
      textAlign="center"
      size="xl"
      fontWeight="extrabold"
      mb={10}
    >
      TezzBites
    </Heading>
    <Box maxW="md" mx="auto">
      <Heading textAlign="center" size="xl" fontWeight="extrabold">
        Sign in to your account
      </Heading>
      <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
        <Text as="span">Don't have an account?</Text>
        <Link href="#">Get in touch with us!</Link>
      </Text>
      <Card>
        <LoginForm />
      </Card>
    </Box>
  </Box>
);
