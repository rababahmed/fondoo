import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import Icon from "@chakra-ui/icon";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/input";
import { Stack } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import imageCompression from "browser-image-compression";
import { Field } from "formik";
import React, { useRef, useState } from "react";
import { CgSoftwareUpload } from "react-icons/cg";
import { FiImage } from "react-icons/fi";
import { RiUploadCloud2Fill } from "react-icons/ri";
import * as Constants from "../../modules/Constants";
import { useUserStore } from "../../store/useUserStore";

interface Props {
  label: string;
  name: string;
}

const ImageUpload = (props: Props) => {
  const restaurantID = useUserStore((state) => state.restaurantID);
  const token = useUserStore((state) => state.token);

  const toast = useToast();
  const inputRef = useRef<any>();

  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState("");

  const fileUpload = async (e: any) => {
    setIsLoading(true);
    const options = {
      maxSizeMB: 0.8,
      maxWidthOrHeight: 1024,
      useWebWorker: true,
    };
    const imageFile = e.target.files[0];
    console.log(imageFile);
    try {
      const blob = await imageCompression(imageFile, options);
      const file = new File([blob], `${blob.name}`, {
        type: `${imageFile.type}`,
      });
      console.log(file);
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
          setFile(response.data.data.key);
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
    <>
      <Field>
        {({ field }: any) => (
          <FormControl>
            <FormLabel htmlFor={props.name}>{props.label}</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<FiImage />} />
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
                id={props.name}
                onChange={(e) => fileUpload(e)}
                ref={inputRef}
                style={{ display: "none" }}
              />
              <Input
                {...field}
                id={props.name}
                value={file}
                placeholder="Upload your file"
                onClick={() => inputRef.current.click()}
              />
            </InputGroup>
          </FormControl>
        )}
      </Field>
    </>
  );
};

export default ImageUpload;
