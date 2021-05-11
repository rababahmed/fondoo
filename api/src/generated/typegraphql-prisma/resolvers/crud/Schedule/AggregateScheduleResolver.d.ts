import { GraphQLResolveInfo } from "graphql";
import { AggregateScheduleArgs } from "./args/AggregateScheduleArgs";
import { AggregateSchedule } from "../../outputs/AggregateSchedule";
export declare class AggregateScheduleResolver {
    aggregateSchedule(ctx: any, info: GraphQLResolveInfo, args: AggregateScheduleArgs): Promise<AggregateSchedule>;
}
