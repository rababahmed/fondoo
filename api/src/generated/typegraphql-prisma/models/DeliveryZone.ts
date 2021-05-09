import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Restaurant } from "../models/Restaurant";
import { DeliveryFee } from "../enums/DeliveryFee";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class DeliveryZone {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  zoneTitle!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  zonePostCode?: string | null;

  @TypeGraphQL.Field(_type => DeliveryFee, {
    nullable: false
  })
  deliveryFeeType!: "Fixed" | "Percent";

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  deliveryCharge!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  minDeliveryAmount?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  minDeliveryRadius?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  maxDeliveryRadius?: number | null;

  Restaurant?: Restaurant | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  restaurantId?: string | null;
}
