import { Box, Grid, Icon, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import RibbonItem from "../misc/ClickableText";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { format } from "date-fns";

const TopRibbon = ({ rdata, cdata }: any) => {
  const serverDate = format(new Date(), "eeee");

  const [isDesktop] = useMediaQuery("(min-width: 640px)");

  console.log(serverDate);

  const openingData = rdata.schedules.find((x: any) => x.day === serverDate);

  console.log(openingData);

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
              <RibbonItem
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
              <RibbonItem
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
