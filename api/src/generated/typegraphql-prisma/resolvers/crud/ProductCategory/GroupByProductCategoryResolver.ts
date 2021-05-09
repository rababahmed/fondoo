import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByProductCategoryArgs } from "./args/GroupByProductCategoryArgs";
import { ProductCategory } from "../../../models/ProductCategory";
import { ProductCategoryGroupBy } from "../../outputs/ProductCategoryGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProductCategory)
export class GroupByProductCategoryResolver {
  @TypeGraphQL.Query(_returns => [ProductCategoryGroupBy], {
    nullable: false
  })
  async groupByProductCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByProductCategoryArgs): Promise<ProductCategoryGroupBy[]> {
    const { count, avg, sum, min, max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).productCategory.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
