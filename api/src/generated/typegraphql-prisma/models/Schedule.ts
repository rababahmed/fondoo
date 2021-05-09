import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Restaurant } from "../models/Restaurant";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Schedule {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  openingTime?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  closingTime?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  minDeliveryAmount?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  deliveryTime?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  takeawayTime?: string | null;

  Restaurant?: Restaurant | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  restaurantId?: string | null;
}
