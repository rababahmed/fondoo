import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCustomerAddressArgs } from "./args/FindUniqueCustomerAddressArgs";
import { CustomerAddress } from "../../../models/CustomerAddress";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CustomerAddress)
export class FindUniqueCustomerAddressResolver {
  @TypeGraphQL.Query(_returns => CustomerAddress, {
    nullable: true
  })
  async customerAddress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCustomerAddressArgs): Promise<CustomerAddress | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customerAddress.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
