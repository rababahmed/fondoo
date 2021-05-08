import * as TypeGraphQL from "type-graphql";
import { CartElement } from "../../../models/CartElement";
import { Order } from "../../../models/Order";
import { Product } from "../../../models/Product";
import { ProductCategory } from "../../../models/ProductCategory";
import { Restaurant } from "../../../models/Restaurant";
import { ProductCartElementArgs } from "./args/ProductCartElementArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Product)
export class ProductRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => ProductCategory, {
    nullable: false
  })
  async category(@TypeGraphQL.Root() product: Product, @TypeGraphQL.Ctx() ctx: any): Promise<ProductCategory> {
    return getPrismaFromContext(ctx).product.findUnique({
      where: {
        id: product.id,
      },
    }).category({});
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

  @TypeGraphQL.FieldResolver(_type => Order, {
    nullable: true
  })
  async Order(@TypeGraphQL.Root() product: Product, @TypeGraphQL.Ctx() ctx: any): Promise<Order | null> {
    return getPrismaFromContext(ctx).product.findUnique({
      where: {
        id: product.id,
      },
    }).Order({});
  }

  @TypeGraphQL.FieldResolver(_type => [CartElement], {
    nullable: false
  })
  async CartElement(@TypeGraphQL.Root() product: Product, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProductCartElementArgs): Promise<CartElement[]> {
    return getPrismaFromContext(ctx).product.findUnique({
      where: {
        id: product.id,
      },
    }).CartElement(args);
  }
}
