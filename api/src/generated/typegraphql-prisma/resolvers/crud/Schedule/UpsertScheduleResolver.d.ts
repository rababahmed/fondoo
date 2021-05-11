import { GraphQLResolveInfo } from "graphql";
import { UpsertScheduleArgs } from "./args/UpsertScheduleArgs";
import { Schedule } from "../../../models/Schedule";
export declare class UpsertScheduleResolver {
    upsertSchedule(ctx: any, info: GraphQLResolveInfo, args: UpsertScheduleArgs): Promise<Schedule>;
}
