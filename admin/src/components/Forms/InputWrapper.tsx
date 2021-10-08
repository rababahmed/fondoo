import {
  FormControl,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";
import React from "react";
import { Field, Formik } from "formik";

const InputWrapper = (props: {
  name: string;
  label: string;
  helper?: string;
  children?: any;
}) => {
  return (
    <>
      <FormControl>
        <FormLabel>{props.label}</FormLabel>
        {props.children}
        <FormHelperText>{props.helper}</FormHelperText>
      </FormControl>
    </>
  );
};

export default InputWrapper;
