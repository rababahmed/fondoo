import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCartElementArgs } from "./args/AggregateCartElementArgs";
import { CartElement } from "../../../models/CartElement";
import { AggregateCartElement } from "../../outputs/AggregateCartElement";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CartElement)
export class AggregateCartElementResolver {
  @TypeGraphQL.Query(_returns => AggregateCartElement, {
    nullable: false
  })
  async aggregateCartElement(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCartElementArgs): Promise<AggregateCartElement> {
    return getPrismaFromContext(ctx).cartElement.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
