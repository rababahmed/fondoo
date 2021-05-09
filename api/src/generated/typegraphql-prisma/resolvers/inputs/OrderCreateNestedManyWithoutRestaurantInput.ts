import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateManyRestaurantInputEnvelope } from "../inputs/OrderCreateManyRestaurantInputEnvelope";
import { OrderCreateOrConnectWithoutRestaurantInput } from "../inputs/OrderCreateOrConnectWithoutRestaurantInput";
import { OrderCreateWithoutRestaurantInput } from "../inputs/OrderCreateWithoutRestaurantInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderCreateNestedManyWithoutRestaurantInput {
  @TypeGraphQL.Field(_type => [OrderCreateWithoutRestaurantInput], {
    nullable: true
  })
  create?: OrderCreateWithoutRestaurantInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutRestaurantInput], {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutRestaurantInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderCreateManyRestaurantInputEnvelope, {
    nullable: true
  })
  createMany?: OrderCreateManyRestaurantInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  connect?: OrderWhereUniqueInput[] | undefined;
}
