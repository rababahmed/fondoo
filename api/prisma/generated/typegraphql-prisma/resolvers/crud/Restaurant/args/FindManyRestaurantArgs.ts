import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RestaurantOrderByInput } from "../../../inputs/RestaurantOrderByInput";
import { RestaurantWhereInput } from "../../../inputs/RestaurantWhereInput";
import { RestaurantWhereUniqueInput } from "../../../inputs/RestaurantWhereUniqueInput";
import { RestaurantScalarFieldEnum } from "../../../../enums/RestaurantScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyRestaurantArgs {
  @TypeGraphQL.Field(_type => RestaurantWhereInput, {
    nullable: true
  })
  where?: RestaurantWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RestaurantOrderByInput], {
    nullable: true
  })
  orderBy?: RestaurantOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => RestaurantWhereUniqueInput, {
    nullable: true
  })
  cursor?: RestaurantWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [RestaurantScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "name" | "email" | "businessPhone" | "reservationPhone" | "url" | "address" | "city" | "postCode" | "country" | "currency" | "priceRange" | "diningStyle" | "vat" | "serviceCharge" | "hasParking" | "hasPartyFacilities" | "hasKidsZone" | "isTakeaway" | "isDelivery" | "isReservation" | "isOrdering" | "isAutoAcceptOrder" | "isAutoAcceptReservation" | "updatedAt"> | undefined;
}
