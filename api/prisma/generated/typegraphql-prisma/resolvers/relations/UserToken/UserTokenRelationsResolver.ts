import * as TypeGraphQL from "type-graphql";
import { User } from "../../../models/User";
import { UserToken } from "../../../models/UserToken";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserToken)
export class UserTokenRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async User(@TypeGraphQL.Root() userToken: UserToken, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).userToken.findUnique({
      where: {
        id: userToken.id,
      },
    }).User({});
  }
}
