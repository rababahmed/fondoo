import { GraphQLResolveInfo } from "graphql";
import { DeleteManyScheduleArgs } from "./args/DeleteManyScheduleArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyScheduleResolver {
    deleteManySchedule(ctx: any, info: GraphQLResolveInfo, args: DeleteManyScheduleArgs): Promise<AffectedRowsOutput>;
}
