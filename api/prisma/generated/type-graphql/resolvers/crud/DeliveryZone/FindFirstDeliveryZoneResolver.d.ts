import { GraphQLResolveInfo } from "graphql";
import { FindFirstDeliveryZoneArgs } from "./args/FindFirstDeliveryZoneArgs";
import { DeliveryZone } from "../../../models/DeliveryZone";
export declare class FindFirstDeliveryZoneResolver {
    findFirstDeliveryZone(ctx: any, info: GraphQLResolveInfo, args: FindFirstDeliveryZoneArgs): Promise<DeliveryZone | null>;
}
