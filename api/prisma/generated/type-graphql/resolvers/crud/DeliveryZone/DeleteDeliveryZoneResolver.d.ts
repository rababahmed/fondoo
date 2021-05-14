import { GraphQLResolveInfo } from "graphql";
import { DeleteDeliveryZoneArgs } from "./args/DeleteDeliveryZoneArgs";
import { DeliveryZone } from "../../../models/DeliveryZone";
export declare class DeleteDeliveryZoneResolver {
    deleteDeliveryZone(ctx: any, info: GraphQLResolveInfo, args: DeleteDeliveryZoneArgs): Promise<DeliveryZone | null>;
}
