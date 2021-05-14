import { GraphQLResolveInfo } from "graphql";
import { AggregateDeliveryZoneArgs } from "./args/AggregateDeliveryZoneArgs";
import { AggregateDeliveryZone } from "../../outputs/AggregateDeliveryZone";
export declare class AggregateDeliveryZoneResolver {
    aggregateDeliveryZone(ctx: any, info: GraphQLResolveInfo, args: AggregateDeliveryZoneArgs): Promise<AggregateDeliveryZone>;
}
