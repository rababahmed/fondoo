import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateCustomerTokenArgs } from "./args/CreateCustomerTokenArgs";
import { CustomerToken } from "../../../models/CustomerToken";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CustomerToken)
export class CreateCustomerTokenResolver {
  @TypeGraphQL.Mutation(_returns => CustomerToken, {
    nullable: false
  })
  async createCustomerToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateCustomerTokenArgs): Promise<CustomerToken> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customerToken.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
