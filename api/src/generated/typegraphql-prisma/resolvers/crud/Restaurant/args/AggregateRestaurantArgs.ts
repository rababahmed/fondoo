import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RestaurantOrderByInput } from "../../../inputs/RestaurantOrderByInput";
import { RestaurantWhereInput } from "../../../inputs/RestaurantWhereInput";
import { RestaurantWhereUniqueInput } from "../../../inputs/RestaurantWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateRestaurantArgs {
  @TypeGraphQL.Field(_type => RestaurantWhereInput, {
    nullable: true
  })
  where?: RestaurantWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RestaurantOrderByInput], {
    nullable: true
  })
  orderBy?: RestaurantOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => RestaurantWhereUniqueInput, {
    nullable: true
  })
  cursor?: RestaurantWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
