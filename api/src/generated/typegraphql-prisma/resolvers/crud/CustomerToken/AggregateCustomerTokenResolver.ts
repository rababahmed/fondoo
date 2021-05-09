import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCustomerTokenArgs } from "./args/AggregateCustomerTokenArgs";
import { CustomerToken } from "../../../models/CustomerToken";
import { AggregateCustomerToken } from "../../outputs/AggregateCustomerToken";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CustomerToken)
export class AggregateCustomerTokenResolver {
  @TypeGraphQL.Query(_returns => AggregateCustomerToken, {
    nullable: false
  })
  async aggregateCustomerToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCustomerTokenArgs): Promise<AggregateCustomerToken> {
    return getPrismaFromContext(ctx).customerToken.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
