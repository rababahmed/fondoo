import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RestaurantCreateWithoutProductCategoryInput } from "../inputs/RestaurantCreateWithoutProductCategoryInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RestaurantCreateOrConnectWithoutProductCategoryInput {
  @TypeGraphQL.Field(_type => RestaurantWhereUniqueInput, {
    nullable: false
  })
  where!: RestaurantWhereUniqueInput;

  @TypeGraphQL.Field(_type => RestaurantCreateWithoutProductCategoryInput, {
    nullable: false
  })
  create!: RestaurantCreateWithoutProductCategoryInput;
}
