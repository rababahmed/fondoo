import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByDeliveryZoneArgs } from "./args/GroupByDeliveryZoneArgs";
import { DeliveryZone } from "../../../models/DeliveryZone";
import { DeliveryZoneGroupBy } from "../../outputs/DeliveryZoneGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DeliveryZone)
export class GroupByDeliveryZoneResolver {
  @TypeGraphQL.Query(_returns => [DeliveryZoneGroupBy], {
    nullable: false
  })
  async groupByDeliveryZone(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByDeliveryZoneArgs): Promise<DeliveryZoneGroupBy[]> {
    const { count, avg, sum, min, max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).deliveryZone.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
