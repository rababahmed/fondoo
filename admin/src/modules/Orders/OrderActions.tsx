import React from "react";
import { Stack, Tag } from "@chakra-ui/react";
import { AcceptOrder } from "./AcceptOrder";
import { RejectOrder } from "./RejectOrder";

interface Props {
  o: any;
}

const PendingAction = ({ o }: Props) => {
  if (o.isAccepted === null) {
    return (
      <>
        <Stack direction="row">
          <AcceptOrder id={o.id} />
          <RejectOrder id={o.id} />
        </Stack>
      </>
    );
  }
  return null;
};

const Rejected = ({ o }: Props) => {
  if (!o.isAccepted) {
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
  if (o.isAccepted) {
    return (
      <>
        <Stack direction="row">
          <RejectOrder id={o.id} />
        </Stack>
      </>
    );
  }
  return null;
};

const OrderActions = ({ o }: Props) => {
  return (
    <>
      <PendingAction o={o} />
      <Rejected o={o} />
      <Accepted o={o} />
    </>
  );
};

export default OrderActions;
