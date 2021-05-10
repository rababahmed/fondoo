import * as TypeGraphQL from "type-graphql";

export enum OrderScalarFieldEnum {
  id = "id",
  items = "items",
  coupon = "coupon",
  deliveryCharges = "deliveryCharges",
  vat = "vat",
  serviceCharge = "serviceCharge",
  total = "total",
  isAccepted = "isAccepted",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  userId = "userId",
  restaurantId = "restaurantId",
  customerId = "customerId",
  customerAddressId = "customerAddressId"
}
TypeGraphQL.registerEnumType(OrderScalarFieldEnum, {
  name: "OrderScalarFieldEnum",
  description: undefined,
});
