import * as TypeGraphQL from "type-graphql";
import { Product } from "../../../models/Product";
import { ProductCategory } from "../../../models/ProductCategory";
import { Restaurant } from "../../../models/Restaurant";
import { ProductCategoryProductArgs } from "./args/ProductCategoryProductArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProductCategory)
export class ProductCategoryRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Restaurant, {
    nullable: false
  })
  async restaurants(@TypeGraphQL.Root() productCategory: ProductCategory, @TypeGraphQL.Ctx() ctx: any): Promise<Restaurant> {
    return getPrismaFromContext(ctx).productCategory.findUnique({
      where: {
        id: productCategory.id,
      },
    }).restaurants({});
  }

  @TypeGraphQL.FieldResolver(_type => [Product], {
    nullable: false
  })
  async Product(@TypeGraphQL.Root() productCategory: ProductCategory, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProductCategoryProductArgs): Promise<Product[]> {
    return getPrismaFromContext(ctx).productCategory.findUnique({
      where: {
        id: productCategory.id,
      },
    }).Product(args);
  }
}
