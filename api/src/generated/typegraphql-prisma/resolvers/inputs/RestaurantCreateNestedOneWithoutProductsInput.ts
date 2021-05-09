import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RestaurantCreateOrConnectWithoutProductsInput } from "../inputs/RestaurantCreateOrConnectWithoutProductsInput";
import { RestaurantCreateWithoutProductsInput } from "../inputs/RestaurantCreateWithoutProductsInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RestaurantCreateNestedOneWithoutProductsInput {
  @TypeGraphQL.Field(_type => RestaurantCreateWithoutProductsInput, {
    nullable: true
  })
  create?: RestaurantCreateWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => RestaurantCreateOrConnectWithoutProductsInput, {
    nullable: true
  })
  connectOrCreate?: RestaurantCreateOrConnectWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => RestaurantWhereUniqueInput, {
    nullable: true
  })
  connect?: RestaurantWhereUniqueInput | undefined;
}
