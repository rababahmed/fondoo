import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RestaurantCreateInput } from "../../../inputs/RestaurantCreateInput";
import { RestaurantUpdateInput } from "../../../inputs/RestaurantUpdateInput";
import { RestaurantWhereUniqueInput } from "../../../inputs/RestaurantWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertRestaurantArgs {
  @TypeGraphQL.Field(_type => RestaurantWhereUniqueInput, {
    nullable: false
  })
  where!: RestaurantWhereUniqueInput;

  @TypeGraphQL.Field(_type => RestaurantCreateInput, {
    nullable: false
  })
  create!: RestaurantCreateInput;

  @TypeGraphQL.Field(_type => RestaurantUpdateInput, {
    nullable: false
  })
  update!: RestaurantUpdateInput;
}
