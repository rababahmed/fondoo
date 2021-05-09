import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeliveryFee } from "../../enums/DeliveryFee";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DeliveryZoneCreateManyRestaurantInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  zoneTitle!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  zonePostCode?: string | undefined;

  @TypeGraphQL.Field(_type => DeliveryFee, {
    nullable: true
  })
  deliveryFeeType?: "Fixed" | "Percent" | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  deliveryCharge?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  minDeliveryAmount?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  minDeliveryRadius?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  maxDeliveryRadius?: number | undefined;
}
