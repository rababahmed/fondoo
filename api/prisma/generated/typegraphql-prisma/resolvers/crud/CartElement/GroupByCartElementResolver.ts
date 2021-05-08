import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByCartElementArgs } from "./args/GroupByCartElementArgs";
import { CartElement } from "../../../models/CartElement";
import { CartElementGroupBy } from "../../outputs/CartElementGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CartElement)
export class GroupByCartElementResolver {
  @TypeGraphQL.Query(_returns => [CartElementGroupBy], {
    nullable: false
  })
  async groupByCartElement(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCartElementArgs): Promise<CartElementGroupBy[]> {
    const { count, avg, sum, min, max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).cartElement.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
