import { CustomerCreateOrConnectWithoutRestaurantsInput } from "../inputs/CustomerCreateOrConnectWithoutRestaurantsInput";
import { CustomerCreateWithoutRestaurantsInput } from "../inputs/CustomerCreateWithoutRestaurantsInput";
import { CustomerScalarWhereInput } from "../inputs/CustomerScalarWhereInput";
import { CustomerUpdateManyWithWhereWithoutRestaurantsInput } from "../inputs/CustomerUpdateManyWithWhereWithoutRestaurantsInput";
import { CustomerUpdateWithWhereUniqueWithoutRestaurantsInput } from "../inputs/CustomerUpdateWithWhereUniqueWithoutRestaurantsInput";
import { CustomerUpsertWithWhereUniqueWithoutRestaurantsInput } from "../inputs/CustomerUpsertWithWhereUniqueWithoutRestaurantsInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";
export declare class CustomerUpdateManyWithoutRestaurantsInput {
    create?: CustomerCreateWithoutRestaurantsInput[] | undefined;
    connectOrCreate?: CustomerCreateOrConnectWithoutRestaurantsInput[] | undefined;
    upsert?: CustomerUpsertWithWhereUniqueWithoutRestaurantsInput[] | undefined;
    connect?: CustomerWhereUniqueInput[] | undefined;
    set?: CustomerWhereUniqueInput[] | undefined;
    disconnect?: CustomerWhereUniqueInput[] | undefined;
    delete?: CustomerWhereUniqueInput[] | undefined;
    update?: CustomerUpdateWithWhereUniqueWithoutRestaurantsInput[] | undefined;
    updateMany?: CustomerUpdateManyWithWhereWithoutRestaurantsInput[] | undefined;
    deleteMany?: CustomerScalarWhereInput[] | undefined;
}
