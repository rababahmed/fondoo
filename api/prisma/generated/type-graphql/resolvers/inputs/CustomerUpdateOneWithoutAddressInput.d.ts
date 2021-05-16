import { CustomerCreateOrConnectWithoutAddressInput } from "../inputs/CustomerCreateOrConnectWithoutAddressInput";
import { CustomerCreateWithoutAddressInput } from "../inputs/CustomerCreateWithoutAddressInput";
import { CustomerUpdateWithoutAddressInput } from "../inputs/CustomerUpdateWithoutAddressInput";
import { CustomerUpsertWithoutAddressInput } from "../inputs/CustomerUpsertWithoutAddressInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";
export declare class CustomerUpdateOneWithoutAddressInput {
    create?: CustomerCreateWithoutAddressInput | undefined;
    connectOrCreate?: CustomerCreateOrConnectWithoutAddressInput | undefined;
    upsert?: CustomerUpsertWithoutAddressInput | undefined;
    connect?: CustomerWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: CustomerUpdateWithoutAddressInput | undefined;
}
