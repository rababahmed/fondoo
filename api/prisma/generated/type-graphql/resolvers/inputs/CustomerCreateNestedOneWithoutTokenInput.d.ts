import { CustomerCreateOrConnectWithoutTokenInput } from "../inputs/CustomerCreateOrConnectWithoutTokenInput";
import { CustomerUncheckedCreateWithoutTokenInput } from "../inputs/CustomerUncheckedCreateWithoutTokenInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";
export declare class CustomerCreateNestedOneWithoutTokenInput {
    create?: CustomerUncheckedCreateWithoutTokenInput | undefined;
    connectOrCreate?: CustomerCreateOrConnectWithoutTokenInput | undefined;
    connect?: CustomerWhereUniqueInput | undefined;
}
