import { Box, Center, Container, Heading, Stack } from "@chakra-ui/layout";
import React from "react";
import ReservationCard from "../../components/card/ReservationCard";

const ReservationContainer = ({ rdata, cdata }: any) => {
  return (
    <>
      <Box mt={10} mb={40} bg={"white"}>
        <Container maxW={"7xl"}>
          <Center>
            <Stack direction={"column"} py={14} spacing={6}>
              <Heading size="xl" fontWeight="bold" align="center">
                {rdata.CMSHome.reservationHeading}
              </Heading>
              <Heading size="md" fontWeight="semibold" align="center">
                {rdata.CMSHome.reservationDescription
                  ? rdata.CMSHome.reservationDescription
                  : null}
              </Heading>
              <Box w="600px">
                <ReservationCard cdata={cdata} />
              </Box>
            </Stack>
          </Center>
        </Container>
      </Box>
    </>
  );
};

export default ReservationContainer;
