import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RestaurantCreateInput } from "../../../inputs/RestaurantCreateInput";

@TypeGraphQL.ArgsType()
export class CreateRestaurantArgs {
  @TypeGraphQL.Field(_type => RestaurantCreateInput, {
    nullable: false
  })
  data!: RestaurantCreateInput;
}
