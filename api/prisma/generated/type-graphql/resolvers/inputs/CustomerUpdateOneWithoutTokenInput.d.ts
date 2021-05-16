import { CustomerCreateOrConnectWithoutTokenInput } from "../inputs/CustomerCreateOrConnectWithoutTokenInput";
import { CustomerUncheckedCreateWithoutTokenInput } from "../inputs/CustomerUncheckedCreateWithoutTokenInput";
import { CustomerUncheckedUpdateWithoutTokenInput } from "../inputs/CustomerUncheckedUpdateWithoutTokenInput";
import { CustomerUpsertWithoutTokenInput } from "../inputs/CustomerUpsertWithoutTokenInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";
export declare class CustomerUpdateOneWithoutTokenInput {
    create?: CustomerUncheckedCreateWithoutTokenInput | undefined;
    connectOrCreate?: CustomerCreateOrConnectWithoutTokenInput | undefined;
    upsert?: CustomerUpsertWithoutTokenInput | undefined;
    connect?: CustomerWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: CustomerUncheckedUpdateWithoutTokenInput | undefined;
}
