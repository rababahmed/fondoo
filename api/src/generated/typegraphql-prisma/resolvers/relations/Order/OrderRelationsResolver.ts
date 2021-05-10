import * as TypeGraphQL from "type-graphql";
import { Customer } from "../../../models/Customer";
import { CustomerAddress } from "../../../models/CustomerAddress";
import { Order } from "../../../models/Order";
import { Restaurant } from "../../../models/Restaurant";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Order)
export class OrderRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() order: Order, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).order.findUnique({
      where: {
        id: order.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Restaurant, {
    nullable: false
  })
  async restaurant(@TypeGraphQL.Root() order: Order, @TypeGraphQL.Ctx() ctx: any): Promise<Restaurant> {
    return getPrismaFromContext(ctx).order.findUnique({
      where: {
        id: order.id,
      },
    }).restaurant({});
  }

  @TypeGraphQL.FieldResolver(_type => Customer, {
    nullable: true
  })
  async Customer(@TypeGraphQL.Root() order: Order, @TypeGraphQL.Ctx() ctx: any): Promise<Customer | null> {
    return getPrismaFromContext(ctx).order.findUnique({
      where: {
        id: order.id,
      },
    }).Customer({});
  }

  @TypeGraphQL.FieldResolver(_type => CustomerAddress, {
    nullable: true
  })
  async CustomerAddress(@TypeGraphQL.Root() order: Order, @TypeGraphQL.Ctx() ctx: any): Promise<CustomerAddress | null> {
    return getPrismaFromContext(ctx).order.findUnique({
      where: {
        id: order.id,
      },
    }).CustomerAddress({});
  }
}
