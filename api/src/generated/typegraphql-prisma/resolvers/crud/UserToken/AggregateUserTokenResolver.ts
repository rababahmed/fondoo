import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateUserTokenArgs } from "./args/AggregateUserTokenArgs";
import { UserToken } from "../../../models/UserToken";
import { AggregateUserToken } from "../../outputs/AggregateUserToken";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserToken)
export class AggregateUserTokenResolver {
  @TypeGraphQL.Query(_returns => AggregateUserToken, {
    nullable: false
  })
  async aggregateUserToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUserTokenArgs): Promise<AggregateUserToken> {
    return getPrismaFromContext(ctx).userToken.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
