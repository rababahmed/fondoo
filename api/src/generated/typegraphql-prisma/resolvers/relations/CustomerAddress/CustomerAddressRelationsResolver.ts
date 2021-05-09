import * as TypeGraphQL from "type-graphql";
import { Customer } from "../../../models/Customer";
import { CustomerAddress } from "../../../models/CustomerAddress";
import { Order } from "../../../models/Order";
import { CustomerAddressOrderArgs } from "./args/CustomerAddressOrderArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CustomerAddress)
export class CustomerAddressRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Customer, {
    nullable: true
  })
  async Customer(@TypeGraphQL.Root() customerAddress: CustomerAddress, @TypeGraphQL.Ctx() ctx: any): Promise<Customer | null> {
    return getPrismaFromContext(ctx).customerAddress.findUnique({
      where: {
        id: customerAddress.id,
      },
    }).Customer({});
  }

  @TypeGraphQL.FieldResolver(_type => [Order], {
    nullable: false
  })
  async Order(@TypeGraphQL.Root() customerAddress: CustomerAddress, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CustomerAddressOrderArgs): Promise<Order[]> {
    return getPrismaFromContext(ctx).customerAddress.findUnique({
      where: {
        id: customerAddress.id,
      },
    }).Order(args);
  }
}
