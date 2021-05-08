import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateCustomerAddressArgs } from "./args/CreateCustomerAddressArgs";
import { CustomerAddress } from "../../../models/CustomerAddress";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CustomerAddress)
export class CreateCustomerAddressResolver {
  @TypeGraphQL.Mutation(_returns => CustomerAddress, {
    nullable: false
  })
  async createCustomerAddress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateCustomerAddressArgs): Promise<CustomerAddress> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customerAddress.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
