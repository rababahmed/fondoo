import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RestaurantUpdateManyMutationInput } from "../../../inputs/RestaurantUpdateManyMutationInput";
import { RestaurantWhereInput } from "../../../inputs/RestaurantWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyRestaurantArgs {
  @TypeGraphQL.Field(_type => RestaurantUpdateManyMutationInput, {
    nullable: false
  })
  data!: RestaurantUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => RestaurantWhereInput, {
    nullable: true
  })
  where?: RestaurantWhereInput | undefined;
}
