import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RestaurantWhereUniqueInput } from "../../../inputs/RestaurantWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteRestaurantArgs {
  @TypeGraphQL.Field(_type => RestaurantWhereUniqueInput, {
    nullable: false
  })
  where!: RestaurantWhereUniqueInput;
}
