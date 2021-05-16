import { CustomerCreateOrConnectWithoutTokenInput } from "../inputs/CustomerCreateOrConnectWithoutTokenInput";
import { CustomerCreateWithoutTokenInput } from "../inputs/CustomerCreateWithoutTokenInput";
import { CustomerUpdateWithoutTokenInput } from "../inputs/CustomerUpdateWithoutTokenInput";
import { CustomerUpsertWithoutTokenInput } from "../inputs/CustomerUpsertWithoutTokenInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";
export declare class CustomerUpdateOneWithoutTokenInput {
    create?: CustomerCreateWithoutTokenInput | undefined;
    connectOrCreate?: CustomerCreateOrConnectWithoutTokenInput | undefined;
    upsert?: CustomerUpsertWithoutTokenInput | undefined;
    connect?: CustomerWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: CustomerUpdateWithoutTokenInput | undefined;
}
