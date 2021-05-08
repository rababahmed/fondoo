import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOrderElementArgs } from "./args/UpsertOrderElementArgs";
import { OrderElement } from "../../../models/OrderElement";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OrderElement)
export class UpsertOrderElementResolver {
  @TypeGraphQL.Mutation(_returns => OrderElement, {
    nullable: false
  })
  async upsertOrderElement(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOrderElementArgs): Promise<OrderElement> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).orderElement.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
