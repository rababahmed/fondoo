import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RestaurantUpdateInput } from "../../../inputs/RestaurantUpdateInput";
import { RestaurantWhereUniqueInput } from "../../../inputs/RestaurantWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateRestaurantArgs {
  @TypeGraphQL.Field(_type => RestaurantUpdateInput, {
    nullable: false
  })
  data!: RestaurantUpdateInput;

  @TypeGraphQL.Field(_type => RestaurantWhereUniqueInput, {
    nullable: false
  })
  where!: RestaurantWhereUniqueInput;
}
