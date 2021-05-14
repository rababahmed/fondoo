import { GraphQLResolveInfo } from "graphql";
import { DeleteScheduleArgs } from "./args/DeleteScheduleArgs";
import { Schedule } from "../../../models/Schedule";
export declare class DeleteScheduleResolver {
    deleteSchedule(ctx: any, info: GraphQLResolveInfo, args: DeleteScheduleArgs): Promise<Schedule | null>;
}
