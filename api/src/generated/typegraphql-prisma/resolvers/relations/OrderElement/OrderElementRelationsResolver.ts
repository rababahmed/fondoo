import * as TypeGraphQL from "type-graphql";
import { Order } from "../../../models/Order";
import { OrderElement } from "../../../models/OrderElement";
import { ProductCategory } from "../../../models/ProductCategory";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OrderElement)
export class OrderElementRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => ProductCategory, {
    nullable: false
  })
  async category(@TypeGraphQL.Root() orderElement: OrderElement, @TypeGraphQL.Ctx() ctx: any): Promise<ProductCategory> {
    return getPrismaFromContext(ctx).orderElement.findUnique({
      where: {
        id: orderElement.id,
      },
    }).category({});
  }

  @TypeGraphQL.FieldResolver(_type => Order, {
    nullable: true
  })
  async Order(@TypeGraphQL.Root() orderElement: OrderElement, @TypeGraphQL.Ctx() ctx: any): Promise<Order | null> {
    return getPrismaFromContext(ctx).orderElement.findUnique({
      where: {
        id: orderElement.id,
      },
    }).Order({});
  }
}
