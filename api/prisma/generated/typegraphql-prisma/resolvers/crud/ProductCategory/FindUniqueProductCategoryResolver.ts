import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueProductCategoryArgs } from "./args/FindUniqueProductCategoryArgs";
import { ProductCategory } from "../../../models/ProductCategory";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProductCategory)
export class FindUniqueProductCategoryResolver {
  @TypeGraphQL.Query(_returns => ProductCategory, {
    nullable: true
  })
  async productCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueProductCategoryArgs): Promise<ProductCategory | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).productCategory.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
