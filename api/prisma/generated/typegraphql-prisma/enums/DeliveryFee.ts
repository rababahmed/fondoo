import * as TypeGraphQL from "type-graphql";

export enum DeliveryFee {
  Fixed = "Fixed",
  Percent = "Percent"
}
TypeGraphQL.registerEnumType(DeliveryFee, {
  name: "DeliveryFee",
  description: undefined,
});
