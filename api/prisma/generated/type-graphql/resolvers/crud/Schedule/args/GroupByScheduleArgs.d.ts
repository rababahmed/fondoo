import { ScheduleOrderByInput } from "../../../inputs/ScheduleOrderByInput";
import { ScheduleScalarWhereWithAggregatesInput } from "../../../inputs/ScheduleScalarWhereWithAggregatesInput";
import { ScheduleWhereInput } from "../../../inputs/ScheduleWhereInput";
export declare class GroupByScheduleArgs {
    where?: ScheduleWhereInput | undefined;
    orderBy?: ScheduleOrderByInput[] | undefined;
    by: Array<"id" | "createdAt" | "day" | "openingTime" | "closingTime" | "minDeliveryAmount" | "deliveryTime" | "takeawayTime" | "restaurantId">;
    having?: ScheduleScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
