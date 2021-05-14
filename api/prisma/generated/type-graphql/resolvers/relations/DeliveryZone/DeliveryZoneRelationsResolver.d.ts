import { DeliveryZone } from "../../../models/DeliveryZone";
import { Restaurant } from "../../../models/Restaurant";
export declare class DeliveryZoneRelationsResolver {
    Restaurant(deliveryZone: DeliveryZone, ctx: any): Promise<Restaurant | null>;
}
