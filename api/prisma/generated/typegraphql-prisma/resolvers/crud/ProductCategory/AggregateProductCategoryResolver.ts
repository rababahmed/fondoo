import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateProductCategoryArgs } from "./args/AggregateProductCategoryArgs";
import { ProductCategory } from "../../../models/ProductCategory";
import { AggregateProductCategory } from "../../outputs/AggregateProductCategory";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ProductCategory)
export class AggregateProductCategoryResolver {
  @TypeGraphQL.Query(_returns => AggregateProductCategory, {
    nullable: false
  })
  async aggregateProductCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProductCategoryArgs): Promise<AggregateProductCategory> {
    return getPrismaFromContext(ctx).productCategory.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
