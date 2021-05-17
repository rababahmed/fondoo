import { RestaurantCreateOrConnectWithoutCustomersInput } from "../inputs/RestaurantCreateOrConnectWithoutCustomersInput";
import { RestaurantCreateWithoutCustomersInput } from "../inputs/RestaurantCreateWithoutCustomersInput";
import { RestaurantScalarWhereInput } from "../inputs/RestaurantScalarWhereInput";
import { RestaurantUpdateManyWithWhereWithoutCustomersInput } from "../inputs/RestaurantUpdateManyWithWhereWithoutCustomersInput";
import { RestaurantUpdateWithWhereUniqueWithoutCustomersInput } from "../inputs/RestaurantUpdateWithWhereUniqueWithoutCustomersInput";
import { RestaurantUpsertWithWhereUniqueWithoutCustomersInput } from "../inputs/RestaurantUpsertWithWhereUniqueWithoutCustomersInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";
export declare class RestaurantUpdateManyWithoutCustomersInput {
    create?: RestaurantCreateWithoutCustomersInput[] | undefined;
    connectOrCreate?: RestaurantCreateOrConnectWithoutCustomersInput[] | undefined;
    upsert?: RestaurantUpsertWithWhereUniqueWithoutCustomersInput[] | undefined;
    connect?: RestaurantWhereUniqueInput[] | undefined;
    set?: RestaurantWhereUniqueInput[] | undefined;
    disconnect?: RestaurantWhereUniqueInput[] | undefined;
    delete?: RestaurantWhereUniqueInput[] | undefined;
    update?: RestaurantUpdateWithWhereUniqueWithoutCustomersInput[] | undefined;
    updateMany?: RestaurantUpdateManyWithWhereWithoutCustomersInput[] | undefined;
    deleteMany?: RestaurantScalarWhereInput[] | undefined;
}
