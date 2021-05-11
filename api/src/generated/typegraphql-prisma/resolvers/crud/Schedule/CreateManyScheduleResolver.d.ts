import { GraphQLResolveInfo } from "graphql";
import { CreateManyScheduleArgs } from "./args/CreateManyScheduleArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyScheduleResolver {
    createManySchedule(ctx: any, info: GraphQLResolveInfo, args: CreateManyScheduleArgs): Promise<AffectedRowsOutput>;
}
