import {
  FormControl,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";
import React from "react";

const FormInput = (props: {
  id: string;
  label: string;
  type: string;
  helper?: string;
}) => {
  return (
    <div>
      <Box>
        <FormControl id={props.id}>
          <FormLabel>{props.label}</FormLabel>
          <Input type={props.type} />
          <FormHelperText>{props.helper}</FormHelperText>
        </FormControl>
      </Box>
    </div>
  );
};

export default FormInput;
