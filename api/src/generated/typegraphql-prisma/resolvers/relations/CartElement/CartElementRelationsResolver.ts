import * as TypeGraphQL from "type-graphql";
import { CartElement } from "../../../models/CartElement";
import { Customer } from "../../../models/Customer";
import { Product } from "../../../models/Product";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CartElement)
export class CartElementRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Product, {
    nullable: false
  })
  async product(@TypeGraphQL.Root() cartElement: CartElement, @TypeGraphQL.Ctx() ctx: any): Promise<Product> {
    return getPrismaFromContext(ctx).cartElement.findUnique({
      where: {
        id: cartElement.id,
      },
    }).product({});
  }

  @TypeGraphQL.FieldResolver(_type => Customer, {
    nullable: false
  })
  async customer(@TypeGraphQL.Root() cartElement: CartElement, @TypeGraphQL.Ctx() ctx: any): Promise<Customer> {
    return getPrismaFromContext(ctx).cartElement.findUnique({
      where: {
        id: cartElement.id,
      },
    }).customer({});
  }
}
