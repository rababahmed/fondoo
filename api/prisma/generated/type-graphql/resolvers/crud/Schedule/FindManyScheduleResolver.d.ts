import { GraphQLResolveInfo } from "graphql";
import { FindManyScheduleArgs } from "./args/FindManyScheduleArgs";
import { Schedule } from "../../../models/Schedule";
export declare class FindManyScheduleResolver {
    findManySchedule(ctx: any, info: GraphQLResolveInfo, args: FindManyScheduleArgs): Promise<Schedule[]>;
}
