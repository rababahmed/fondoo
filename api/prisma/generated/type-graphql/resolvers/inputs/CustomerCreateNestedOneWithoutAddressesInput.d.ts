import { CustomerCreateOrConnectWithoutAddressesInput } from "../inputs/CustomerCreateOrConnectWithoutAddressesInput";
import { CustomerCreateWithoutAddressesInput } from "../inputs/CustomerCreateWithoutAddressesInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";
export declare class CustomerCreateNestedOneWithoutAddressesInput {
    create?: CustomerCreateWithoutAddressesInput | undefined;
    connectOrCreate?: CustomerCreateOrConnectWithoutAddressesInput | undefined;
    connect?: CustomerWhereUniqueInput | undefined;
}
