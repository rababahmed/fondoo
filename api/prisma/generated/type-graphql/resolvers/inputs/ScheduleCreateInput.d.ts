import { RestaurantCreateNestedOneWithoutScheduleInput } from "../inputs/RestaurantCreateNestedOneWithoutScheduleInput";
export declare class ScheduleCreateInput {
    createdAt?: Date | undefined;
    openingTime?: string | undefined;
    closingTime?: string | undefined;
    minDeliveryAmount?: number | undefined;
    deliveryTime?: string | undefined;
    takeawayTime?: string | undefined;
    Restaurant?: RestaurantCreateNestedOneWithoutScheduleInput | undefined;
}
