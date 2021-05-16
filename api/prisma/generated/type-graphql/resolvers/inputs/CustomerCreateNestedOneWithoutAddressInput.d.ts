import { CustomerCreateOrConnectWithoutAddressInput } from "../inputs/CustomerCreateOrConnectWithoutAddressInput";
import { CustomerUncheckedCreateWithoutAddressInput } from "../inputs/CustomerUncheckedCreateWithoutAddressInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";
export declare class CustomerCreateNestedOneWithoutAddressInput {
    create?: CustomerUncheckedCreateWithoutAddressInput | undefined;
    connectOrCreate?: CustomerCreateOrConnectWithoutAddressInput | undefined;
    connect?: CustomerWhereUniqueInput | undefined;
}
