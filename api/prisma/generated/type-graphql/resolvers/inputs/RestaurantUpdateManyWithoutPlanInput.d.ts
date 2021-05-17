import { RestaurantCreateManyPlanInputEnvelope } from "../inputs/RestaurantCreateManyPlanInputEnvelope";
import { RestaurantCreateOrConnectWithoutPlanInput } from "../inputs/RestaurantCreateOrConnectWithoutPlanInput";
import { RestaurantCreateWithoutPlanInput } from "../inputs/RestaurantCreateWithoutPlanInput";
import { RestaurantScalarWhereInput } from "../inputs/RestaurantScalarWhereInput";
import { RestaurantUpdateManyWithWhereWithoutPlanInput } from "../inputs/RestaurantUpdateManyWithWhereWithoutPlanInput";
import { RestaurantUpdateWithWhereUniqueWithoutPlanInput } from "../inputs/RestaurantUpdateWithWhereUniqueWithoutPlanInput";
import { RestaurantUpsertWithWhereUniqueWithoutPlanInput } from "../inputs/RestaurantUpsertWithWhereUniqueWithoutPlanInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";
export declare class RestaurantUpdateManyWithoutPlanInput {
    create?: RestaurantCreateWithoutPlanInput[] | undefined;
    connectOrCreate?: RestaurantCreateOrConnectWithoutPlanInput[] | undefined;
    upsert?: RestaurantUpsertWithWhereUniqueWithoutPlanInput[] | undefined;
    createMany?: RestaurantCreateManyPlanInputEnvelope | undefined;
    connect?: RestaurantWhereUniqueInput[] | undefined;
    set?: RestaurantWhereUniqueInput[] | undefined;
    disconnect?: RestaurantWhereUniqueInput[] | undefined;
    delete?: RestaurantWhereUniqueInput[] | undefined;
    update?: RestaurantUpdateWithWhereUniqueWithoutPlanInput[] | undefined;
    updateMany?: RestaurantUpdateManyWithWhereWithoutPlanInput[] | undefined;
    deleteMany?: RestaurantScalarWhereInput[] | undefined;
}
