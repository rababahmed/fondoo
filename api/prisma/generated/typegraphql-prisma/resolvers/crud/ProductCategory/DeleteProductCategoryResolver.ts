import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteProductCategoryArgs } from "./args/DeleteProductCategoryArgs";
import { ProductCategory } from "../../../models/ProductCategory";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProductCategory)
export class DeleteProductCategoryResolver {
  @TypeGraphQL.Mutation(_returns => ProductCategory, {
    nullable: true
  })
  async deleteProductCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteProductCategoryArgs): Promise<ProductCategory | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).productCategory.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
