import { GraphQLResolveInfo } from "graphql";
import { UpdateManyScheduleArgs } from "./args/UpdateManyScheduleArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyScheduleResolver {
    updateManySchedule(ctx: any, info: GraphQLResolveInfo, args: UpdateManyScheduleArgs): Promise<AffectedRowsOutput>;
}
