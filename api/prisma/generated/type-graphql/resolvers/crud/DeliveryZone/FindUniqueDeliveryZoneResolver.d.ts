import { GraphQLResolveInfo } from "graphql";
import { FindUniqueDeliveryZoneArgs } from "./args/FindUniqueDeliveryZoneArgs";
import { DeliveryZone } from "../../../models/DeliveryZone";
export declare class FindUniqueDeliveryZoneResolver {
    deliveryZone(ctx: any, info: GraphQLResolveInfo, args: FindUniqueDeliveryZoneArgs): Promise<DeliveryZone | null>;
}
