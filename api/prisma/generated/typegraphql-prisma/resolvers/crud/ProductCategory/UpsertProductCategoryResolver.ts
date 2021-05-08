import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertProductCategoryArgs } from "./args/UpsertProductCategoryArgs";
import { ProductCategory } from "../../../models/ProductCategory";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProductCategory)
export class UpsertProductCategoryResolver {
  @TypeGraphQL.Mutation(_returns => ProductCategory, {
    nullable: false
  })
  async upsertProductCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertProductCategoryArgs): Promise<ProductCategory> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).productCategory.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
