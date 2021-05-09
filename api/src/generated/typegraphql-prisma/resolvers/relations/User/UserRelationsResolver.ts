import * as TypeGraphQL from "type-graphql";
import { Restaurant } from "../../../models/Restaurant";
import { User } from "../../../models/User";
import { UserToken } from "../../../models/UserToken";
import { UserRestaurantsArgs } from "./args/UserRestaurantsArgs";
import { UserTokenArgs } from "./args/UserTokenArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [UserToken], {
    nullable: false
  })
  async token(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserTokenArgs): Promise<UserToken[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).token(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Restaurant], {
    nullable: false
  })
  async restaurants(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserRestaurantsArgs): Promise<Restaurant[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).restaurants(args);
  }
}
