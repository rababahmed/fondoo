import React from "react";
import { Box, Stack, Tag } from "@chakra-ui/react";
import { AcceptOrder } from "./AcceptOrder";
import { RejectOrder } from "./RejectOrder";
import { CompleteOrder } from "./CompleteOrder";

interface Props {
  o: any;
  isExpandedModal?: boolean;
}

const PendingAction = ({ o, isExpandedModal }: Props) => {
  if (o.status === null || o.status === "Pending") {
    return (
      <Box display="flex" justifyContent={"center"}>
        <Stack direction={isExpandedModal ? "row" : "column"}>
          <RejectOrder id={o.id} status={"Cancelled"} />
          <AcceptOrder id={o.id} status={"Confirmed"} />
        </Stack>
      </Box>
    );
  }
  return null;
};

const Rejected = ({ o }: Props) => {
  if (o.status === "Cancelled") {
    return (
      <>
        <Stack direction="row">
          <Tag colorScheme={"red"} borderRadius={"full"}>
            Rejected
          </Tag>
        </Stack>
      </>
    );
  }
  return null;
};

const Accepted = ({ o }: Props) => {
  if (o.status === "Confirmed") {
    return (
      <>
        <Stack direction="row">
          <CompleteOrder id={o.id} status={"Completed"} />
        </Stack>
      </>
    );
  }
  return null;
};

const Completed = ({ o }: Props) => {
  if (o.status === "Completed") {
    return (
      <>
        <Stack direction="row">
          <Tag colorScheme={"green"} borderRadius={"full"}>
            Completed
          </Tag>
        </Stack>
      </>
    );
  }
  return null;
};

const OrderActions = ({ o, isExpandedModal }: Props) => {
  return (
    <>
      <PendingAction o={o} isExpandedModal={isExpandedModal} />
      <Rejected o={o} />
      <Accepted o={o} />
      <Completed o={o} />
    </>
  );
};

export default OrderActions;
