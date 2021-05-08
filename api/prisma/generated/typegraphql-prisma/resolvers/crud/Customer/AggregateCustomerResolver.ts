import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCustomerArgs } from "./args/AggregateCustomerArgs";
import { Customer } from "../../../models/Customer";
import { AggregateCustomer } from "../../outputs/AggregateCustomer";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Customer)
export class AggregateCustomerResolver {
  @TypeGraphQL.Query(_returns => AggregateCustomer, {
    nullable: false
  })
  async aggregateCustomer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCustomerArgs): Promise<AggregateCustomer> {
    return getPrismaFromContext(ctx).customer.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
