import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateOrderElementArgs } from "./args/AggregateOrderElementArgs";
import { OrderElement } from "../../../models/OrderElement";
import { AggregateOrderElement } from "../../outputs/AggregateOrderElement";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OrderElement)
export class AggregateOrderElementResolver {
  @TypeGraphQL.Query(_returns => AggregateOrderElement, {
    nullable: false
  })
  async aggregateOrderElement(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateOrderElementArgs): Promise<AggregateOrderElement> {
    return getPrismaFromContext(ctx).orderElement.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
