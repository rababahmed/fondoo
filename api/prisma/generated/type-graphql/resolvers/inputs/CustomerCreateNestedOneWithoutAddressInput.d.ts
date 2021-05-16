import { CustomerCreateOrConnectWithoutAddressInput } from "../inputs/CustomerCreateOrConnectWithoutAddressInput";
import { CustomerCreateWithoutAddressInput } from "../inputs/CustomerCreateWithoutAddressInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";
export declare class CustomerCreateNestedOneWithoutAddressInput {
    create?: CustomerCreateWithoutAddressInput | undefined;
    connectOrCreate?: CustomerCreateOrConnectWithoutAddressInput | undefined;
    connect?: CustomerWhereUniqueInput | undefined;
}
