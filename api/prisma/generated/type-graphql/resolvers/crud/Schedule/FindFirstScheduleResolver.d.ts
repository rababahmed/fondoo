import { GraphQLResolveInfo } from "graphql";
import { FindFirstScheduleArgs } from "./args/FindFirstScheduleArgs";
import { Schedule } from "../../../models/Schedule";
export declare class FindFirstScheduleResolver {
    findFirstSchedule(ctx: any, info: GraphQLResolveInfo, args: FindFirstScheduleArgs): Promise<Schedule | null>;
}
