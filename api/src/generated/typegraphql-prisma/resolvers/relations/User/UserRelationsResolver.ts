import * as TypeGraphQL from "type-graphql";
import { Order } from "../../../models/Order";
import { Restaurant } from "../../../models/Restaurant";
import { User } from "../../../models/User";
import { UserToken } from "../../../models/UserToken";
import { UserOrdersArgs } from "./args/UserOrdersArgs";
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

  @TypeGraphQL.FieldResolver(_type => Restaurant, {
    nullable: true
  })
  async Restaurant(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any): Promise<Restaurant | null> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).Restaurant({});
  }

  @TypeGraphQL.FieldResolver(_type => [Order], {
    nullable: false
  })
  async orders(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserOrdersArgs): Promise<Order[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).orders(args);
  }
}
