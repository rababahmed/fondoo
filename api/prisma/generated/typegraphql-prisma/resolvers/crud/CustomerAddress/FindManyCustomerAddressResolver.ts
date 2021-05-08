import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyCustomerAddressArgs } from "./args/FindManyCustomerAddressArgs";
import { CustomerAddress } from "../../../models/CustomerAddress";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CustomerAddress)
export class FindManyCustomerAddressResolver {
  @TypeGraphQL.Query(_returns => [CustomerAddress], {
    nullable: false
  })
  async customerAddresses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyCustomerAddressArgs): Promise<CustomerAddress[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customerAddress.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
