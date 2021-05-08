import * as TypeGraphQL from "type-graphql";

export enum CustomerAddressScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  streetAddress = "streetAddress",
  city = "city",
  postCode = "postCode",
  country = "country",
  customerId = "customerId"
}
TypeGraphQL.registerEnumType(CustomerAddressScalarFieldEnum, {
  name: "CustomerAddressScalarFieldEnum",
  description: undefined,
});
