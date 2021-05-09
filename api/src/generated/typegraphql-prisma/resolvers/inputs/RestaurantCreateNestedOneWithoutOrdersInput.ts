import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RestaurantCreateOrConnectWithoutOrdersInput } from "../inputs/RestaurantCreateOrConnectWithoutOrdersInput";
import { RestaurantCreateWithoutOrdersInput } from "../inputs/RestaurantCreateWithoutOrdersInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RestaurantCreateNestedOneWithoutOrdersInput {
  @TypeGraphQL.Field(_type => RestaurantCreateWithoutOrdersInput, {
    nullable: true
  })
  create?: RestaurantCreateWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => RestaurantCreateOrConnectWithoutOrdersInput, {
    nullable: true
  })
  connectOrCreate?: RestaurantCreateOrConnectWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => RestaurantWhereUniqueInput, {
    nullable: true
  })
  connect?: RestaurantWhereUniqueInput | undefined;
}
