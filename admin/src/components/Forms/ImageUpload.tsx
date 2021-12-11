import { Button } from "@chakra-ui/button";
import { FormLabel } from "@chakra-ui/form-control";
import Icon from "@chakra-ui/icon";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/input";
import { Stack } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import imageCompression from "browser-image-compression";
import React, { useRef, useState } from "react";
import { CgSoftwareUpload } from "react-icons/cg";
import { FiImage } from "react-icons/fi";
import * as Constants from "../../modules/Constants";
import { useUserStore } from "../../store/useUserStore";

interface Props {
  label: string;
  name: string;
  field: any;
  form: any;
  value?: string;
}

const ImageUpload = (props: Props) => {
  const { field, form } = props;
  const restaurantID = useUserStore((state) => state.restaurantID);
  const token = useUserStore((state) => state.token);

  const toast = useToast();
  const inputRef = useRef<any>();

  const [isLoading, setIsLoading] = useState(false);

  const fileUpload = async (e: any) => {
    setIsLoading(true);
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    const imageFile = e.target.files[0];
    try {
      const blob = await imageCompression(imageFile, options);
      const file = new File([blob], `${blob.name}`, {
        type: `${imageFile.type}`,
      });
      const formData = new FormData();
      formData.append("image", file);
      await axios
        .post(Constants.REST_API_V1 + `/uploads/${restaurantID}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            token: token,
          },
        })
        .then(function (response) {
          console.log(response);
          form.setFieldValue(field.name, response.data.key);
          toast({
            title: "Successfully uploaded the image.",
            status: "success",
            isClosable: true,
            position: "top",
          });
        })
        .catch(function (error) {
          toast({
            title: "Whoops! There has been an error.",
            status: "error",
            isClosable: true,
            position: "top",
          });
        });
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      toast({
        title: "Whoops! Error.",
        description: "Unable to upload the image.",
        status: "error",
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <Stack spacing={0}>
      <FormLabel htmlFor={props.name}>{props.label}</FormLabel>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <FiImage />
        </InputLeftElement>
        <InputRightElement w="auto">
          <Button
            loadingText="Uploading"
            bgColor="gray.200"
            isLoading={isLoading}
            h="1.75rem"
            mr={2}
            size="sm"
            onClick={() => inputRef.current.click()}
          >
            <Icon as={CgSoftwareUpload} mr={1} /> Upload
          </Button>
        </InputRightElement>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => fileUpload(e)}
          ref={inputRef}
          style={{ display: "none" }}
        />
        <Input
          name={props.name}
          isReadOnly={true}
          value={field.value}
          placeholder="Upload your file"
          onClick={() => inputRef.current.click()}
        />
      </InputGroup>
    </Stack>
  );
};

export default ImageUpload;
