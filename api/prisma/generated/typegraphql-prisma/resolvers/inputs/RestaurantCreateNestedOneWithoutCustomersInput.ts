import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RestaurantCreateOrConnectWithoutCustomersInput } from "../inputs/RestaurantCreateOrConnectWithoutCustomersInput";
import { RestaurantCreateWithoutCustomersInput } from "../inputs/RestaurantCreateWithoutCustomersInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RestaurantCreateNestedOneWithoutCustomersInput {
  @TypeGraphQL.Field(_type => RestaurantCreateWithoutCustomersInput, {
    nullable: true
  })
  create?: RestaurantCreateWithoutCustomersInput | undefined;

  @TypeGraphQL.Field(_type => RestaurantCreateOrConnectWithoutCustomersInput, {
    nullable: true
  })
  connectOrCreate?: RestaurantCreateOrConnectWithoutCustomersInput | undefined;

  @TypeGraphQL.Field(_type => RestaurantWhereUniqueInput, {
    nullable: true
  })
  connect?: RestaurantWhereUniqueInput | undefined;
}
