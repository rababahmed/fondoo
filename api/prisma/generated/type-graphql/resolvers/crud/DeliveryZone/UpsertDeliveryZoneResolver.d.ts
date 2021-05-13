import { GraphQLResolveInfo } from "graphql";
import { UpsertDeliveryZoneArgs } from "./args/UpsertDeliveryZoneArgs";
import { DeliveryZone } from "../../../models/DeliveryZone";
export declare class UpsertDeliveryZoneResolver {
    upsertDeliveryZone(ctx: any, info: GraphQLResolveInfo, args: UpsertDeliveryZoneArgs): Promise<DeliveryZone>;
}
