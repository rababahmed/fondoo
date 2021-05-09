import * as TypeGraphQL from "type-graphql";

export enum ScheduleScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  openingTime = "openingTime",
  closingTime = "closingTime",
  minDeliveryAmount = "minDeliveryAmount",
  deliveryTime = "deliveryTime",
  takeawayTime = "takeawayTime",
  restaurantId = "restaurantId"
}
TypeGraphQL.registerEnumType(ScheduleScalarFieldEnum, {
  name: "ScheduleScalarFieldEnum",
  description: undefined,
});
