import { GraphQLResolveInfo } from "graphql";
import { FindUniqueScheduleArgs } from "./args/FindUniqueScheduleArgs";
import { Schedule } from "../../../models/Schedule";
export declare class FindUniqueScheduleResolver {
    schedule(ctx: any, info: GraphQLResolveInfo, args: FindUniqueScheduleArgs): Promise<Schedule | null>;
}
