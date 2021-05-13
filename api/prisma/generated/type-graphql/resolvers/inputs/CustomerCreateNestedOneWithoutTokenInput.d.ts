import { CustomerCreateOrConnectWithoutTokenInput } from "../inputs/CustomerCreateOrConnectWithoutTokenInput";
import { CustomerCreateWithoutTokenInput } from "../inputs/CustomerCreateWithoutTokenInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";
export declare class CustomerCreateNestedOneWithoutTokenInput {
    create?: CustomerCreateWithoutTokenInput | undefined;
    connectOrCreate?: CustomerCreateOrConnectWithoutTokenInput | undefined;
    connect?: CustomerWhereUniqueInput | undefined;
}
