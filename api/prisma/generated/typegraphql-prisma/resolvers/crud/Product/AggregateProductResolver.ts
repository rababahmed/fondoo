import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateProductArgs } from "./args/AggregateProductArgs";
import { Product } from "../../../models/Product";
import { AggregateProduct } from "../../outputs/AggregateProduct";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Product)
export class AggregateProductResolver {
  @TypeGraphQL.Query(_returns => AggregateProduct, {
    nullable: false
  })
  async aggregateProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProductArgs): Promise<AggregateProduct> {
    return getPrismaFromContext(ctx).product.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
