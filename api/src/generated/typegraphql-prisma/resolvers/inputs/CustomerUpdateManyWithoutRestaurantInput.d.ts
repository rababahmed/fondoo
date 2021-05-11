import { CustomerCreateManyRestaurantInputEnvelope } from "../inputs/CustomerCreateManyRestaurantInputEnvelope";
import { CustomerCreateOrConnectWithoutRestaurantInput } from "../inputs/CustomerCreateOrConnectWithoutRestaurantInput";
import { CustomerCreateWithoutRestaurantInput } from "../inputs/CustomerCreateWithoutRestaurantInput";
import { CustomerScalarWhereInput } from "../inputs/CustomerScalarWhereInput";
import { CustomerUpdateManyWithWhereWithoutRestaurantInput } from "../inputs/CustomerUpdateManyWithWhereWithoutRestaurantInput";
import { CustomerUpdateWithWhereUniqueWithoutRestaurantInput } from "../inputs/CustomerUpdateWithWhereUniqueWithoutRestaurantInput";
import { CustomerUpsertWithWhereUniqueWithoutRestaurantInput } from "../inputs/CustomerUpsertWithWhereUniqueWithoutRestaurantInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";
export declare class CustomerUpdateManyWithoutRestaurantInput {
    create?: CustomerCreateWithoutRestaurantInput[] | undefined;
    connectOrCreate?: CustomerCreateOrConnectWithoutRestaurantInput[] | undefined;
    upsert?: CustomerUpsertWithWhereUniqueWithoutRestaurantInput[] | undefined;
    createMany?: CustomerCreateManyRestaurantInputEnvelope | undefined;
    connect?: CustomerWhereUniqueInput[] | undefined;
    set?: CustomerWhereUniqueInput[] | undefined;
    disconnect?: CustomerWhereUniqueInput[] | undefined;
    delete?: CustomerWhereUniqueInput[] | undefined;
    update?: CustomerUpdateWithWhereUniqueWithoutRestaurantInput[] | undefined;
    updateMany?: CustomerUpdateManyWithWhereWithoutRestaurantInput[] | undefined;
    deleteMany?: CustomerScalarWhereInput[] | undefined;
}
