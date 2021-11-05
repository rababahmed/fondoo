import { Box, Grid } from "@chakra-ui/react";
import { SubmitButton } from "formik-chakra-ui";
import React from "react";

const SaveButton = (props: any) => {
  return (
    <>
      <Grid
        templateColumns="1fr 1fr"
        bg={"#E9E9E9"}
        w="100%"
        h="16"
        position="fixed"
        bottom="0"
        right="0"
        border="1px"
        borderColor="gray.200"
        zIndex="3"
        alignItems="center"
      >
        <Box justifySelf="start"></Box>
        <SubmitButton
          justifySelf="end"
          isLoading={props.isLoading}
          loadingText="Saving"
          w={20}
          bgColor={props.isLoading ? "primary.700" : "primary.800"}
          _active={{ bgColor: "primary.800" }}
          _hover={{ bgColor: "primary.900" }}
          mr={28}
          mt={2}
          mb={2}
        >
          Save
        </SubmitButton>
      </Grid>
    </>
  );
};

export default SaveButton;
