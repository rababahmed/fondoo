import { ScheduleCreateManyRestaurantInputEnvelope } from "../inputs/ScheduleCreateManyRestaurantInputEnvelope";
import { ScheduleCreateOrConnectWithoutRestaurantInput } from "../inputs/ScheduleCreateOrConnectWithoutRestaurantInput";
import { ScheduleCreateWithoutRestaurantInput } from "../inputs/ScheduleCreateWithoutRestaurantInput";
import { ScheduleWhereUniqueInput } from "../inputs/ScheduleWhereUniqueInput";
export declare class ScheduleCreateNestedManyWithoutRestaurantInput {
    create?: ScheduleCreateWithoutRestaurantInput[] | undefined;
    connectOrCreate?: ScheduleCreateOrConnectWithoutRestaurantInput[] | undefined;
    createMany?: ScheduleCreateManyRestaurantInputEnvelope | undefined;
    connect?: ScheduleWhereUniqueInput[] | undefined;
}
