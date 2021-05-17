import { RestaurantCreateNestedOneWithoutSchedulesInput } from "../inputs/RestaurantCreateNestedOneWithoutSchedulesInput";
export declare class ScheduleCreateInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    day?: string | undefined;
    openingTime?: string | undefined;
    closingTime?: string | undefined;
    minDeliveryAmount?: number | undefined;
    deliveryTime?: string | undefined;
    takeawayTime?: string | undefined;
    Restaurant?: RestaurantCreateNestedOneWithoutSchedulesInput | undefined;
}
