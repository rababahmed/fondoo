import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstOrderElementArgs } from "./args/FindFirstOrderElementArgs";
import { OrderElement } from "../../../models/OrderElement";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OrderElement)
export class FindFirstOrderElementResolver {
  @TypeGraphQL.Query(_returns => OrderElement, {
    nullable: true
  })
  async findFirstOrderElement(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstOrderElementArgs): Promise<OrderElement | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).orderElement.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
