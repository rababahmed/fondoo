import { GraphQLResolveInfo } from "graphql";
import { UpdateDeliveryZoneArgs } from "./args/UpdateDeliveryZoneArgs";
import { DeliveryZone } from "../../../models/DeliveryZone";
export declare class UpdateDeliveryZoneResolver {
    updateDeliveryZone(ctx: any, info: GraphQLResolveInfo, args: UpdateDeliveryZoneArgs): Promise<DeliveryZone | null>;
}
