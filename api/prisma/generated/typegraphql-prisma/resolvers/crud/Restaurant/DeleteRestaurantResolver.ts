import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteRestaurantArgs } from "./args/DeleteRestaurantArgs";
import { Restaurant } from "../../../models/Restaurant";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Restaurant)
export class DeleteRestaurantResolver {
  @TypeGraphQL.Mutation(_returns => Restaurant, {
    nullable: true
  })
  async deleteRestaurant(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteRestaurantArgs): Promise<Restaurant | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).restaurant.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
