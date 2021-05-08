import * as TypeGraphQL from "type-graphql";
import { Customer } from "../../../models/Customer";
import { CustomerAddress } from "../../../models/CustomerAddress";
import { Order } from "../../../models/Order";
import { OrderElement } from "../../../models/OrderElement";
import { Product } from "../../../models/Product";
import { Restaurant } from "../../../models/Restaurant";
import { OrderElementsArgs } from "./args/OrderElementsArgs";
import { OrderProductArgs } from "./args/OrderProductArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Order)
export class OrderRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [OrderElement], {
    nullable: false
  })
  async elements(@TypeGraphQL.Root() order: Order, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: OrderElementsArgs): Promise<OrderElement[]> {
    return getPrismaFromContext(ctx).order.findUnique({
      where: {
        id: order.id,
      },
    }).elements(args);
  }

  @TypeGraphQL.FieldResolver(_type => CustomerAddress, {
    nullable: false
  })
  async customerAddress(@TypeGraphQL.Root() order: Order, @TypeGraphQL.Ctx() ctx: any): Promise<CustomerAddress> {
    return getPrismaFromContext(ctx).order.findUnique({
      where: {
        id: order.id,
      },
    }).customerAddress({});
  }

  @TypeGraphQL.FieldResolver(_type => Restaurant, {
    nullable: true
  })
  async restaurant(@TypeGraphQL.Root() order: Order, @TypeGraphQL.Ctx() ctx: any): Promise<Restaurant | null> {
    return getPrismaFromContext(ctx).order.findUnique({
      where: {
        id: order.id,
      },
    }).restaurant({});
  }

  @TypeGraphQL.FieldResolver(_type => Customer, {
    nullable: true
  })
  async customer(@TypeGraphQL.Root() order: Order, @TypeGraphQL.Ctx() ctx: any): Promise<Customer | null> {
    return getPrismaFromContext(ctx).order.findUnique({
      where: {
        id: order.id,
      },
    }).customer({});
  }

  @TypeGraphQL.FieldResolver(_type => [Product], {
    nullable: false
  })
  async product(@TypeGraphQL.Root() order: Order, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: OrderProductArgs): Promise<Product[]> {
    return getPrismaFromContext(ctx).order.findUnique({
      where: {
        id: order.id,
      },
    }).product(args);
  }
}
