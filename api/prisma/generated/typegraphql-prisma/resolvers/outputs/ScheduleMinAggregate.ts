import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class ScheduleMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  openingTime!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  closingTime!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  minDeliveryAmount!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  deliveryTime!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  takeawayTime!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  restaurantId!: string | null;
}
