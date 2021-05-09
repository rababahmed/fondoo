import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateDeliveryZoneArgs } from "./args/AggregateDeliveryZoneArgs";
import { DeliveryZone } from "../../../models/DeliveryZone";
import { AggregateDeliveryZone } from "../../outputs/AggregateDeliveryZone";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DeliveryZone)
export class AggregateDeliveryZoneResolver {
  @TypeGraphQL.Query(_returns => AggregateDeliveryZone, {
    nullable: false
  })
  async aggregateDeliveryZone(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateDeliveryZoneArgs): Promise<AggregateDeliveryZone> {
    return getPrismaFromContext(ctx).deliveryZone.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
