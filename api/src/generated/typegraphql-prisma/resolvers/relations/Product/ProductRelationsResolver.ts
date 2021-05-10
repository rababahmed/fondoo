import * as TypeGraphQL from "type-graphql";
import { Product } from "../../../models/Product";
import { ProductCategory } from "../../../models/ProductCategory";
import { Restaurant } from "../../../models/Restaurant";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Product)
export class ProductRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => ProductCategory, {
    nullable: true
  })
  async ProductCategory(@TypeGraphQL.Root() product: Product, @TypeGraphQL.Ctx() ctx: any): Promise<ProductCategory | null> {
    return getPrismaFromContext(ctx).product.findUnique({
      where: {
        id: product.id,
      },
    }).ProductCategory({});
  }

  @TypeGraphQL.FieldResolver(_type => Restaurant, {
    nullable: true
  })
  async Restaurant(@TypeGraphQL.Root() product: Product, @TypeGraphQL.Ctx() ctx: any): Promise<Restaurant | null> {
    return getPrismaFromContext(ctx).product.findUnique({
      where: {
        id: product.id,
      },
    }).Restaurant({});
  }
}
