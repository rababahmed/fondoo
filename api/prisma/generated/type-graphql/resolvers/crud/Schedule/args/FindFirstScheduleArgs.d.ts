import { ScheduleOrderByInput } from "../../../inputs/ScheduleOrderByInput";
import { ScheduleWhereInput } from "../../../inputs/ScheduleWhereInput";
import { ScheduleWhereUniqueInput } from "../../../inputs/ScheduleWhereUniqueInput";
export declare class FindFirstScheduleArgs {
    where?: ScheduleWhereInput | undefined;
    orderBy?: ScheduleOrderByInput[] | undefined;
    cursor?: ScheduleWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "createdAt" | "day" | "openingTime" | "closingTime" | "minDeliveryAmount" | "deliveryTime" | "takeawayTime" | "restaurantId"> | undefined;
}
