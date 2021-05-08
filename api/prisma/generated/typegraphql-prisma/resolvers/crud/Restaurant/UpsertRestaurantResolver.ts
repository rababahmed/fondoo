import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertRestaurantArgs } from "./args/UpsertRestaurantArgs";
import { Restaurant } from "../../../models/Restaurant";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Restaurant)
export class UpsertRestaurantResolver {
  @TypeGraphQL.Mutation(_returns => Restaurant, {
    nullable: false
  })
  async upsertRestaurant(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertRestaurantArgs): Promise<Restaurant> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).restaurant.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
