import { Restaurant } from "../../../models/Restaurant";
import { Schedule } from "../../../models/Schedule";
export declare class ScheduleRelationsResolver {
    Restaurant(schedule: Schedule, ctx: any): Promise<Restaurant | null>;
}
