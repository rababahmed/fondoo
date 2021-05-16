import { ScheduleCreateManyRestaurantInputEnvelope } from "../inputs/ScheduleCreateManyRestaurantInputEnvelope";
import { ScheduleCreateOrConnectWithoutRestaurantInput } from "../inputs/ScheduleCreateOrConnectWithoutRestaurantInput";
import { ScheduleCreateWithoutRestaurantInput } from "../inputs/ScheduleCreateWithoutRestaurantInput";
import { ScheduleScalarWhereInput } from "../inputs/ScheduleScalarWhereInput";
import { ScheduleUpdateManyWithWhereWithoutRestaurantInput } from "../inputs/ScheduleUpdateManyWithWhereWithoutRestaurantInput";
import { ScheduleUpdateWithWhereUniqueWithoutRestaurantInput } from "../inputs/ScheduleUpdateWithWhereUniqueWithoutRestaurantInput";
import { ScheduleUpsertWithWhereUniqueWithoutRestaurantInput } from "../inputs/ScheduleUpsertWithWhereUniqueWithoutRestaurantInput";
import { ScheduleWhereUniqueInput } from "../inputs/ScheduleWhereUniqueInput";
export declare class ScheduleUncheckedUpdateManyWithoutRestaurantInput {
    create?: ScheduleCreateWithoutRestaurantInput[] | undefined;
    connectOrCreate?: ScheduleCreateOrConnectWithoutRestaurantInput[] | undefined;
    upsert?: ScheduleUpsertWithWhereUniqueWithoutRestaurantInput[] | undefined;
    createMany?: ScheduleCreateManyRestaurantInputEnvelope | undefined;
    connect?: ScheduleWhereUniqueInput[] | undefined;
    set?: ScheduleWhereUniqueInput[] | undefined;
    disconnect?: ScheduleWhereUniqueInput[] | undefined;
    delete?: ScheduleWhereUniqueInput[] | undefined;
    update?: ScheduleUpdateWithWhereUniqueWithoutRestaurantInput[] | undefined;
    updateMany?: ScheduleUpdateManyWithWhereWithoutRestaurantInput[] | undefined;
    deleteMany?: ScheduleScalarWhereInput[] | undefined;
}
