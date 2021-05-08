import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueOrderElementArgs } from "./args/FindUniqueOrderElementArgs";
import { OrderElement } from "../../../models/OrderElement";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OrderElement)
export class FindUniqueOrderElementResolver {
  @TypeGraphQL.Query(_returns => OrderElement, {
    nullable: true
  })
  async orderElement(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueOrderElementArgs): Promise<OrderElement | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).orderElement.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
