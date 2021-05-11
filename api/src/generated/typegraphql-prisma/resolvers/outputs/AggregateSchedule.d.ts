import { ScheduleAvgAggregate } from "../outputs/ScheduleAvgAggregate";
import { ScheduleCountAggregate } from "../outputs/ScheduleCountAggregate";
import { ScheduleMaxAggregate } from "../outputs/ScheduleMaxAggregate";
import { ScheduleMinAggregate } from "../outputs/ScheduleMinAggregate";
import { ScheduleSumAggregate } from "../outputs/ScheduleSumAggregate";
export declare class AggregateSchedule {
    count: ScheduleCountAggregate | null;
    avg: ScheduleAvgAggregate | null;
    sum: ScheduleSumAggregate | null;
    min: ScheduleMinAggregate | null;
    max: ScheduleMaxAggregate | null;
}
