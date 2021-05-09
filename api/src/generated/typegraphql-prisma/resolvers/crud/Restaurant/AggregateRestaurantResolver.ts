import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateRestaurantArgs } from "./args/AggregateRestaurantArgs";
import { Restaurant } from "../../../models/Restaurant";
import { AggregateRestaurant } from "../../outputs/AggregateRestaurant";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Restaurant)
export class AggregateRestaurantResolver {
  @TypeGraphQL.Query(_returns => AggregateRestaurant, {
    nullable: false
  })
  async aggregateRestaurant(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateRestaurantArgs): Promise<AggregateRestaurant> {
    return getPrismaFromContext(ctx).restaurant.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
