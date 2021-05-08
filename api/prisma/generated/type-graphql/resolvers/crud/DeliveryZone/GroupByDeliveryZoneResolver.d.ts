import { GraphQLResolveInfo } from "graphql";
import { GroupByDeliveryZoneArgs } from "./args/GroupByDeliveryZoneArgs";
import { DeliveryZoneGroupBy } from "../../outputs/DeliveryZoneGroupBy";
export declare class GroupByDeliveryZoneResolver {
    groupByDeliveryZone(ctx: any, info: GraphQLResolveInfo, args: GroupByDeliveryZoneArgs): Promise<DeliveryZoneGroupBy[]>;
}
