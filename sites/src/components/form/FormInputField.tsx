import { Button } from "@chakra-ui/button";
import { FormLabel } from "@chakra-ui/form-control";
import Icon from "@chakra-ui/icon";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/input";
import { Stack } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import React from "react";
import { BsCalendar } from "react-icons/bs";
import { FiImage } from "react-icons/fi";

interface Props {
  label?: string;
  name: string;
  field: any;
  form: any;
  value?: string;
  placeholder?: string;
  type?: any;
  icon?: any;
  cdata?: any;
}

const FormInputField = (props: Props) => {
  const { field, form } = props;

  const inputRef = React.useRef<any>();

  const [isLoading, setIsLoading] = React.useState(false);

  const onChange = async (e: any) => {
    form.setFieldValue(e.target.value);
  };

  return (
    <Stack spacing={0}>
      <FormLabel htmlFor={props.name}>{props.label}</FormLabel>
      <InputGroup>
        <InputLeftElement pointerEvents="none" color={props.cdata.primaryColor}>
          {props.icon}
        </InputLeftElement>
        <Input
          name={props.name}
          type={props.type}
          onChange={(e: any) => onChange(e)}
          bg="white"
          value={field.value}
          placeholder={props.placeholder}
          ref={inputRef}
        />
      </InputGroup>
    </Stack>
  );
};

export default FormInputField;
