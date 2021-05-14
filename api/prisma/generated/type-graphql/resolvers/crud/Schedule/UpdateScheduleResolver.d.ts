import { GraphQLResolveInfo } from "graphql";
import { UpdateScheduleArgs } from "./args/UpdateScheduleArgs";
import { Schedule } from "../../../models/Schedule";
export declare class UpdateScheduleResolver {
    updateSchedule(ctx: any, info: GraphQLResolveInfo, args: UpdateScheduleArgs): Promise<Schedule | null>;
}
