import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOrderElementArgs } from "./args/UpdateOrderElementArgs";
import { OrderElement } from "../../../models/OrderElement";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OrderElement)
export class UpdateOrderElementResolver {
  @TypeGraphQL.Mutation(_returns => OrderElement, {
    nullable: true
  })
  async updateOrderElement(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOrderElementArgs): Promise<OrderElement | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).orderElement.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
