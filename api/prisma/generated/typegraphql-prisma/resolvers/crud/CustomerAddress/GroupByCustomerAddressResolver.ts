import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByCustomerAddressArgs } from "./args/GroupByCustomerAddressArgs";
import { CustomerAddress } from "../../../models/CustomerAddress";
import { CustomerAddressGroupBy } from "../../outputs/CustomerAddressGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CustomerAddress)
export class GroupByCustomerAddressResolver {
  @TypeGraphQL.Query(_returns => [CustomerAddressGroupBy], {
    nullable: false
  })
  async groupByCustomerAddress(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCustomerAddressArgs): Promise<CustomerAddressGroupBy[]> {
    const { count, avg, sum, min, max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customerAddress.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
