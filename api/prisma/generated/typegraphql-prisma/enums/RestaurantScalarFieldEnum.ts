import * as TypeGraphQL from "type-graphql";

export enum RestaurantScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  name = "name",
  email = "email",
  businessPhone = "businessPhone",
  reservationPhone = "reservationPhone",
  url = "url",
  address = "address",
  city = "city",
  postCode = "postCode",
  country = "country",
  currency = "currency",
  priceRange = "priceRange",
  diningStyle = "diningStyle",
  vat = "vat",
  serviceCharge = "serviceCharge",
  hasParking = "hasParking",
  hasPartyFacilities = "hasPartyFacilities",
  hasKidsZone = "hasKidsZone",
  isTakeaway = "isTakeaway",
  isDelivery = "isDelivery",
  isReservation = "isReservation",
  isOrdering = "isOrdering",
  isAutoAcceptOrder = "isAutoAcceptOrder",
  isAutoAcceptReservation = "isAutoAcceptReservation",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(RestaurantScalarFieldEnum, {
  name: "RestaurantScalarFieldEnum",
  description: undefined,
});
