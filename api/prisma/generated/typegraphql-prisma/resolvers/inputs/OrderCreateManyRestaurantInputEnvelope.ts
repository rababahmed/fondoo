import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateManyRestaurantInput } from "../inputs/OrderCreateManyRestaurantInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderCreateManyRestaurantInputEnvelope {
  @TypeGraphQL.Field(_type => [OrderCreateManyRestaurantInput], {
    nullable: false
  })
  data!: OrderCreateManyRestaurantInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
