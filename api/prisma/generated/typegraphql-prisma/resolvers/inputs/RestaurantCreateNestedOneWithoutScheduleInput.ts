import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RestaurantCreateOrConnectWithoutScheduleInput } from "../inputs/RestaurantCreateOrConnectWithoutScheduleInput";
import { RestaurantCreateWithoutScheduleInput } from "../inputs/RestaurantCreateWithoutScheduleInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RestaurantCreateNestedOneWithoutScheduleInput {
  @TypeGraphQL.Field(_type => RestaurantCreateWithoutScheduleInput, {
    nullable: true
  })
  create?: RestaurantCreateWithoutScheduleInput | undefined;

  @TypeGraphQL.Field(_type => RestaurantCreateOrConnectWithoutScheduleInput, {
    nullable: true
  })
  connectOrCreate?: RestaurantCreateOrConnectWithoutScheduleInput | undefined;

  @TypeGraphQL.Field(_type => RestaurantWhereUniqueInput, {
    nullable: true
  })
  connect?: RestaurantWhereUniqueInput | undefined;
}
