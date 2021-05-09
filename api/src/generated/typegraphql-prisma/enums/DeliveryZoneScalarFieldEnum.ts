import * as TypeGraphQL from "type-graphql";

export enum DeliveryZoneScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  zoneTitle = "zoneTitle",
  zonePostCode = "zonePostCode",
  deliveryFeeType = "deliveryFeeType",
  deliveryCharge = "deliveryCharge",
  minDeliveryAmount = "minDeliveryAmount",
  minDeliveryRadius = "minDeliveryRadius",
  maxDeliveryRadius = "maxDeliveryRadius",
  restaurantId = "restaurantId"
}
TypeGraphQL.registerEnumType(DeliveryZoneScalarFieldEnum, {
  name: "DeliveryZoneScalarFieldEnum",
  description: undefined,
});
