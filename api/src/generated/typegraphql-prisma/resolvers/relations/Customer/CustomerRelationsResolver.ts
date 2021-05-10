import * as TypeGraphQL from "type-graphql";
import { Customer } from "../../../models/Customer";
import { CustomerAddress } from "../../../models/CustomerAddress";
import { CustomerToken } from "../../../models/CustomerToken";
import { Order } from "../../../models/Order";
import { Restaurant } from "../../../models/Restaurant";
import { CustomerAddressArgs } from "./args/CustomerAddressArgs";
import { CustomerOrdersArgs } from "./args/CustomerOrdersArgs";
import { CustomerTokenArgs } from "./args/CustomerTokenArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Customer)
export class CustomerRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [CustomerToken], {
    nullable: false
  })
  async token(@TypeGraphQL.Root() customer: Customer, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CustomerTokenArgs): Promise<CustomerToken[]> {
    return getPrismaFromContext(ctx).customer.findUnique({
      where: {
        id: customer.id,
      },
    }).token(args);
  }

  @TypeGraphQL.FieldResolver(_type => [CustomerAddress], {
    nullable: false
  })
  async address(@TypeGraphQL.Root() customer: Customer, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CustomerAddressArgs): Promise<CustomerAddress[]> {
    return getPrismaFromContext(ctx).customer.findUnique({
      where: {
        id: customer.id,
      },
    }).address(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Order], {
    nullable: false
  })
  async orders(@TypeGraphQL.Root() customer: Customer, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CustomerOrdersArgs): Promise<Order[]> {
    return getPrismaFromContext(ctx).customer.findUnique({
      where: {
        id: customer.id,
      },
    }).orders(args);
  }

  @TypeGraphQL.FieldResolver(_type => Restaurant, {
    nullable: true
  })
  async Restaurant(@TypeGraphQL.Root() customer: Customer, @TypeGraphQL.Ctx() ctx: any): Promise<Restaurant | null> {
    return getPrismaFromContext(ctx).customer.findUnique({
      where: {
        id: customer.id,
      },
    }).Restaurant({});
  }
}
