import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCustomerAddressArgs } from "./args/AggregateCustomerAddressArgs";
import { CustomerAddress } from "../../../models/CustomerAddress";
import { AggregateCustomerAddress } from "../../outputs/AggregateCustomerAddress";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CustomerAddress)
export class AggregateCustomerAddressResolver {
  @TypeGraphQL.Query(_returns => AggregateCustomerAddress, {
    nullable: false
  })
  async aggregateCustomerAddress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCustomerAddressArgs): Promise<AggregateCustomerAddress> {
    return getPrismaFromContext(ctx).customerAddress.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
