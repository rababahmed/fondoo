import { Restaurant } from "../models/Restaurant";
export declare class DeliveryZone {
    id: number;
    createdAt: Date;
    zoneTitle: string;
    zonePostCode?: string | null;
    deliveryFeeType: "Fixed" | "Percent";
    deliveryCharge: number;
    minDeliveryAmount?: number | null;
    minDeliveryRadius?: number | null;
    maxDeliveryRadius?: number | null;
    Restaurant?: Restaurant | null;
    restaurantId?: string | null;
}
