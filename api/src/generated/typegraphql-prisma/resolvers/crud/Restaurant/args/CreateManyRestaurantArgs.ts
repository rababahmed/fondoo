import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RestaurantCreateManyInput } from "../../../inputs/RestaurantCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyRestaurantArgs {
  @TypeGraphQL.Field(_type => [RestaurantCreateManyInput], {
    nullable: false
  })
  data!: RestaurantCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
