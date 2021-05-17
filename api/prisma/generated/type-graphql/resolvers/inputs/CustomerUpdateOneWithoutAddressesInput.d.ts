import { CustomerCreateOrConnectWithoutAddressesInput } from "../inputs/CustomerCreateOrConnectWithoutAddressesInput";
import { CustomerCreateWithoutAddressesInput } from "../inputs/CustomerCreateWithoutAddressesInput";
import { CustomerUpdateWithoutAddressesInput } from "../inputs/CustomerUpdateWithoutAddressesInput";
import { CustomerUpsertWithoutAddressesInput } from "../inputs/CustomerUpsertWithoutAddressesInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";
export declare class CustomerUpdateOneWithoutAddressesInput {
    create?: CustomerCreateWithoutAddressesInput | undefined;
    connectOrCreate?: CustomerCreateOrConnectWithoutAddressesInput | undefined;
    upsert?: CustomerUpsertWithoutAddressesInput | undefined;
    connect?: CustomerWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: CustomerUpdateWithoutAddressesInput | undefined;
}
