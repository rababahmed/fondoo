import { ScheduleAvgAggregate } from "../outputs/ScheduleAvgAggregate";
import { ScheduleCountAggregate } from "../outputs/ScheduleCountAggregate";
import { ScheduleMaxAggregate } from "../outputs/ScheduleMaxAggregate";
import { ScheduleMinAggregate } from "../outputs/ScheduleMinAggregate";
import { ScheduleSumAggregate } from "../outputs/ScheduleSumAggregate";
export declare class ScheduleGroupBy {
    id: string;
    createdAt: Date;
    day: string | null;
    openingTime: string | null;
    closingTime: string | null;
    minDeliveryAmount: number | null;
    deliveryTime: string | null;
    takeawayTime: string | null;
    restaurantId: string | null;
    count: ScheduleCountAggregate | null;
    avg: ScheduleAvgAggregate | null;
    sum: ScheduleSumAggregate | null;
    min: ScheduleMinAggregate | null;
    max: ScheduleMaxAggregate | null;
}
