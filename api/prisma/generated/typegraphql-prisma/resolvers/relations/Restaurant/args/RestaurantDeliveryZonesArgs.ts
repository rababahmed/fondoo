import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeliveryZoneOrderByInput } from "../../../inputs/DeliveryZoneOrderByInput";
import { DeliveryZoneWhereInput } from "../../../inputs/DeliveryZoneWhereInput";
import { DeliveryZoneWhereUniqueInput } from "../../../inputs/DeliveryZoneWhereUniqueInput";
import { DeliveryZoneScalarFieldEnum } from "../../../../enums/DeliveryZoneScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class RestaurantDeliveryZonesArgs {
  @TypeGraphQL.Field(_type => DeliveryZoneWhereInput, {
    nullable: true
  })
  where?: DeliveryZoneWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DeliveryZoneOrderByInput], {
    nullable: true
  })
  orderBy?: DeliveryZoneOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => DeliveryZoneWhereUniqueInput, {
    nullable: true
  })
  cursor?: DeliveryZoneWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [DeliveryZoneScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "zoneTitle" | "zonePostCode" | "deliveryFeeType" | "deliveryCharge" | "minDeliveryAmount" | "minDeliveryRadius" | "maxDeliveryRadius" | "restaurantId"> | undefined;
}
