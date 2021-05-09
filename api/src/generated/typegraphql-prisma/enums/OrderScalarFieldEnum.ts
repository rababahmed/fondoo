import * as TypeGraphQL from "type-graphql";

export enum OrderScalarFieldEnum {
  id = "id",
  charges = "charges",
  total = "total",
  isAccepted = "isAccepted",
  restaurantId = "restaurantId",
  customerId = "customerId",
  customerAddressId = "customerAddressId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(OrderScalarFieldEnum, {
  name: "OrderScalarFieldEnum",
  description: undefined,
});
