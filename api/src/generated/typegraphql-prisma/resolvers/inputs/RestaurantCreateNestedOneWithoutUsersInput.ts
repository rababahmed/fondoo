import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RestaurantCreateOrConnectWithoutUsersInput } from "../inputs/RestaurantCreateOrConnectWithoutUsersInput";
import { RestaurantCreateWithoutUsersInput } from "../inputs/RestaurantCreateWithoutUsersInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RestaurantCreateNestedOneWithoutUsersInput {
  @TypeGraphQL.Field(_type => RestaurantCreateWithoutUsersInput, {
    nullable: true
  })
  create?: RestaurantCreateWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => RestaurantCreateOrConnectWithoutUsersInput, {
    nullable: true
  })
  connectOrCreate?: RestaurantCreateOrConnectWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => RestaurantWhereUniqueInput, {
    nullable: true
  })
  connect?: RestaurantWhereUniqueInput | undefined;
}
