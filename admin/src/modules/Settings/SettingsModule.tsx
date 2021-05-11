import { Box, Grid } from "@chakra-ui/layout";
import React from "react";
import FormInput from "../../components/Forms/FormInput";

export const SettingsModule = () => {
  return (
    <div>
      <Box as="section" rounded="lg" shadow="base" bgColor="white" m={12} p={6}>
        <Grid templateColumns="1fr 1fr 1fr" gap={6}>
          <Box>
            <FormInput
              id="restaurantName"
              label="Restaurant Name"
              type="input"
            />
            <FormInput id="restaurantName" label="Cover Image" type="input" />
            <FormInput id="restaurantName" label="Mobile" type="input" />
            <FormInput id="restaurantName" label="City / Town" type="input" />
          </Box>
          <Box>
            <FormInput id="restaurantName" label="Price Range" type="input" />
            <FormInput
              id="restaurantName"
              label="Restaurant Name"
              type="input"
            />
            <FormInput
              id="restaurantName"
              label="Restaurant Name"
              type="input"
            />
            <FormInput
              id="restaurantName"
              label="Restaurant Name"
              type="input"
            />
          </Box>
          <Box>
            <FormInput
              id="restaurantName"
              label="Restaurant Name"
              type="input"
            />
            <FormInput
              id="restaurantName"
              label="Restaurant Name"
              type="input"
            />
            <FormInput
              id="restaurantName"
              label="Restaurant Name"
              type="input"
            />
            <FormInput
              id="restaurantName"
              label="Restaurant Name"
              type="input"
            />
          </Box>
        </Grid>
      </Box>
    </div>
  );
};
