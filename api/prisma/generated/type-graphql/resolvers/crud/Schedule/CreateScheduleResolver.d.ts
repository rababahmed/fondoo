import { GraphQLResolveInfo } from "graphql";
import { CreateScheduleArgs } from "./args/CreateScheduleArgs";
import { Schedule } from "../../../models/Schedule";
export declare class CreateScheduleResolver {
    createSchedule(ctx: any, info: GraphQLResolveInfo, args: CreateScheduleArgs): Promise<Schedule>;
}
