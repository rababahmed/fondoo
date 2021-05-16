import { CustomerCreateManyRestaurantInputEnvelope } from "../inputs/CustomerCreateManyRestaurantInputEnvelope";
import { CustomerCreateOrConnectWithoutRestaurantInput } from "../inputs/CustomerCreateOrConnectWithoutRestaurantInput";
import { CustomerCreateWithoutRestaurantInput } from "../inputs/CustomerCreateWithoutRestaurantInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";
export declare class CustomerUncheckedCreateNestedManyWithoutRestaurantInput {
    create?: CustomerCreateWithoutRestaurantInput[] | undefined;
    connectOrCreate?: CustomerCreateOrConnectWithoutRestaurantInput[] | undefined;
    createMany?: CustomerCreateManyRestaurantInputEnvelope | undefined;
    connect?: CustomerWhereUniqueInput[] | undefined;
}
