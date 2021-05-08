import * as TypeGraphQL from "type-graphql";
import { Customer } from "../../../models/Customer";
import { CustomerToken } from "../../../models/CustomerToken";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CustomerToken)
export class CustomerTokenRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Customer, {
    nullable: true
  })
  async Customer(@TypeGraphQL.Root() customerToken: CustomerToken, @TypeGraphQL.Ctx() ctx: any): Promise<Customer | null> {
    return getPrismaFromContext(ctx).customerToken.findUnique({
      where: {
        id: customerToken.id,
      },
    }).Customer({});
  }
}
