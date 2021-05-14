import { Restaurant } from "../models/Restaurant";
export declare class Schedule {
    id: number;
    createdAt: Date;
    openingTime?: string | null;
    closingTime?: string | null;
    minDeliveryAmount?: number | null;
    deliveryTime?: string | null;
    takeawayTime?: string | null;
    Restaurant?: Restaurant | null;
    restaurantId?: string | null;
}
