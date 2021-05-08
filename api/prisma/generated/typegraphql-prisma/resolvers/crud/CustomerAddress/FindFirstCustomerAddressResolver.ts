import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstCustomerAddressArgs } from "./args/FindFirstCustomerAddressArgs";
import { CustomerAddress } from "../../../models/CustomerAddress";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CustomerAddress)
export class FindFirstCustomerAddressResolver {
  @TypeGraphQL.Query(_returns => CustomerAddress, {
    nullable: true
  })
  async findFirstCustomerAddress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCustomerAddressArgs): Promise<CustomerAddress | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customerAddress.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
