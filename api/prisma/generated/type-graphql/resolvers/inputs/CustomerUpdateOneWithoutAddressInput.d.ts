import { CustomerCreateOrConnectWithoutAddressInput } from "../inputs/CustomerCreateOrConnectWithoutAddressInput";
import { CustomerUncheckedCreateWithoutAddressInput } from "../inputs/CustomerUncheckedCreateWithoutAddressInput";
import { CustomerUncheckedUpdateWithoutAddressInput } from "../inputs/CustomerUncheckedUpdateWithoutAddressInput";
import { CustomerUpsertWithoutAddressInput } from "../inputs/CustomerUpsertWithoutAddressInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";
export declare class CustomerUpdateOneWithoutAddressInput {
    create?: CustomerUncheckedCreateWithoutAddressInput | undefined;
    connectOrCreate?: CustomerCreateOrConnectWithoutAddressInput | undefined;
    upsert?: CustomerUpsertWithoutAddressInput | undefined;
    connect?: CustomerWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: CustomerUncheckedUpdateWithoutAddressInput | undefined;
}
