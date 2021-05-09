import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeliveryZoneOrderByInput } from "../../../inputs/DeliveryZoneOrderByInput";
import { DeliveryZoneScalarWhereWithAggregatesInput } from "../../../inputs/DeliveryZoneScalarWhereWithAggregatesInput";
import { DeliveryZoneWhereInput } from "../../../inputs/DeliveryZoneWhereInput";
import { DeliveryZoneScalarFieldEnum } from "../../../../enums/DeliveryZoneScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByDeliveryZoneArgs {
  @TypeGraphQL.Field(_type => DeliveryZoneWhereInput, {
    nullable: true
  })
  where?: DeliveryZoneWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DeliveryZoneOrderByInput], {
    nullable: true
  })
  orderBy?: DeliveryZoneOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeliveryZoneScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "zoneTitle" | "zonePostCode" | "deliveryFeeType" | "deliveryCharge" | "minDeliveryAmount" | "minDeliveryRadius" | "maxDeliveryRadius" | "restaurantId">;

  @TypeGraphQL.Field(_type => DeliveryZoneScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: DeliveryZoneScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
