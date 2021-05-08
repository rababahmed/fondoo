import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RestaurantOrderByInput } from "../../../inputs/RestaurantOrderByInput";
import { RestaurantScalarWhereWithAggregatesInput } from "../../../inputs/RestaurantScalarWhereWithAggregatesInput";
import { RestaurantWhereInput } from "../../../inputs/RestaurantWhereInput";
import { RestaurantScalarFieldEnum } from "../../../../enums/RestaurantScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByRestaurantArgs {
  @TypeGraphQL.Field(_type => RestaurantWhereInput, {
    nullable: true
  })
  where?: RestaurantWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RestaurantOrderByInput], {
    nullable: true
  })
  orderBy?: RestaurantOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [RestaurantScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "name" | "email" | "businessPhone" | "reservationPhone" | "url" | "address" | "city" | "postCode" | "country" | "currency" | "priceRange" | "diningStyle" | "vat" | "serviceCharge" | "hasParking" | "hasPartyFacilities" | "hasKidsZone" | "isTakeaway" | "isDelivery" | "isReservation" | "isOrdering" | "isAutoAcceptOrder" | "isAutoAcceptReservation" | "updatedAt">;

  @TypeGraphQL.Field(_type => RestaurantScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: RestaurantScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
