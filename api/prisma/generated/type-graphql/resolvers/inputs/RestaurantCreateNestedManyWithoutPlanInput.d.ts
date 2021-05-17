import { RestaurantCreateManyPlanInputEnvelope } from "../inputs/RestaurantCreateManyPlanInputEnvelope";
import { RestaurantCreateOrConnectWithoutPlanInput } from "../inputs/RestaurantCreateOrConnectWithoutPlanInput";
import { RestaurantCreateWithoutPlanInput } from "../inputs/RestaurantCreateWithoutPlanInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";
export declare class RestaurantCreateNestedManyWithoutPlanInput {
    create?: RestaurantCreateWithoutPlanInput[] | undefined;
    connectOrCreate?: RestaurantCreateOrConnectWithoutPlanInput[] | undefined;
    createMany?: RestaurantCreateManyPlanInputEnvelope | undefined;
    connect?: RestaurantWhereUniqueInput[] | undefined;
}
