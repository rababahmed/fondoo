import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByUserTokenArgs } from "./args/GroupByUserTokenArgs";
import { UserToken } from "../../../models/UserToken";
import { UserTokenGroupBy } from "../../outputs/UserTokenGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserToken)
export class GroupByUserTokenResolver {
  @TypeGraphQL.Query(_returns => [UserTokenGroupBy], {
    nullable: false
  })
  async groupByUserToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByUserTokenArgs): Promise<UserTokenGroupBy[]> {
    const { count, avg, sum, min, max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userToken.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
