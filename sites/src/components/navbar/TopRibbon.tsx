import { Box, Grid, Icon, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import ClickableText from "../misc/ClickableText";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { format } from "date-fns";
import { getOpeningHours } from "../../lib/getOpeningHours";

const TopRibbon = ({ rdata, cdata }: any) => {
  const openingData = getOpeningHours(rdata);

  return (
    <>
      <Box
        display={{ base: "none", md: "block" }}
        zIndex="10"
        bg={cdata.secondaryColor}
        textColor="white"
      >
        <Grid templateColumns="1fr 1fr">
          <Box ml={20} alignItems="start">
            <Stack direction="row">
              <Icon
                as={AiOutlineClockCircle}
                alignSelf="center"
                fontWeight="bold"
              />
              <ClickableText
                text={
                  openingData
                    ? "Today: Delivery & Collection " +
                      openingData.openingTime +
                      " - " +
                      openingData.closingTime
                    : "Sorry, we're closed now!"
                }
              />
            </Stack>
          </Box>
          <Box mr={20} justifySelf="end">
            <Stack direction="row">
              <Icon as={FiPhoneCall} alignSelf="center" fontWeight="bold" />
              <ClickableText
                text={rdata.businessPhone}
                url={"tel:" + rdata.businessPhone}
              />
            </Stack>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default TopRibbon;
