import { GraphQLResolveInfo } from "graphql";
import { GroupByScheduleArgs } from "./args/GroupByScheduleArgs";
import { ScheduleGroupBy } from "../../outputs/ScheduleGroupBy";
export declare class GroupByScheduleResolver {
    groupBySchedule(ctx: any, info: GraphQLResolveInfo, args: GroupByScheduleArgs): Promise<ScheduleGroupBy[]>;
}
