import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RestaurantWhereUniqueInput } from "../../../inputs/RestaurantWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueRestaurantArgs {
  @TypeGraphQL.Field(_type => RestaurantWhereUniqueInput, {
    nullable: false
  })
  where!: RestaurantWhereUniqueInput;
}
