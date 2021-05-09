import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RestaurantCountAggregate } from "../outputs/RestaurantCountAggregate";
import { RestaurantMaxAggregate } from "../outputs/RestaurantMaxAggregate";
import { RestaurantMinAggregate } from "../outputs/RestaurantMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateRestaurant {
  @TypeGraphQL.Field(_type => RestaurantCountAggregate, {
    nullable: true
  })
  count!: RestaurantCountAggregate | null;

  @TypeGraphQL.Field(_type => RestaurantMinAggregate, {
    nullable: true
  })
  min!: RestaurantMinAggregate | null;

  @TypeGraphQL.Field(_type => RestaurantMaxAggregate, {
    nullable: true
  })
  max!: RestaurantMaxAggregate | null;
}
