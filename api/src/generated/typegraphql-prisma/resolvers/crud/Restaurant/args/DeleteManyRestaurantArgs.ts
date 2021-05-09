import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RestaurantWhereInput } from "../../../inputs/RestaurantWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyRestaurantArgs {
  @TypeGraphQL.Field(_type => RestaurantWhereInput, {
    nullable: true
  })
  where?: RestaurantWhereInput | undefined;
}
