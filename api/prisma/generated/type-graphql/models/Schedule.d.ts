import { Restaurant } from "../models/Restaurant";
export declare class Schedule {
    id: string;
    createdAt: Date;
    day?: string | null;
    openingTime?: string | null;
    closingTime?: string | null;
    minDeliveryAmount?: number | null;
    deliveryTime?: string | null;
    takeawayTime?: string | null;
    Restaurant?: Restaurant | null;
    restaurantId?: string | null;
}
