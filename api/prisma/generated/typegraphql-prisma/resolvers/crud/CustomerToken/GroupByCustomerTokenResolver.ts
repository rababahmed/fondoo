import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByCustomerTokenArgs } from "./args/GroupByCustomerTokenArgs";
import { CustomerToken } from "../../../models/CustomerToken";
import { CustomerTokenGroupBy } from "../../outputs/CustomerTokenGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CustomerToken)
export class GroupByCustomerTokenResolver {
  @TypeGraphQL.Query(_returns => [CustomerTokenGroupBy], {
    nullable: false
  })
  async groupByCustomerToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCustomerTokenArgs): Promise<CustomerTokenGroupBy[]> {
    const { count, avg, sum, min, max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customerToken.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
