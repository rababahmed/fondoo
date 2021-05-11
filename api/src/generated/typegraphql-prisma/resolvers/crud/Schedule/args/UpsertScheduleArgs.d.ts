import { ScheduleCreateInput } from "../../../inputs/ScheduleCreateInput";
import { ScheduleUpdateInput } from "../../../inputs/ScheduleUpdateInput";
import { ScheduleWhereUniqueInput } from "../../../inputs/ScheduleWhereUniqueInput";
export declare class UpsertScheduleArgs {
    where: ScheduleWhereUniqueInput;
    create: ScheduleCreateInput;
    update: ScheduleUpdateInput;
}
