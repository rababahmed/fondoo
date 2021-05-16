import { CustomerTokenCreateManyCustomerInputEnvelope } from "../inputs/CustomerTokenCreateManyCustomerInputEnvelope";
import { CustomerTokenCreateOrConnectWithoutCustomerInput } from "../inputs/CustomerTokenCreateOrConnectWithoutCustomerInput";
import { CustomerTokenCreateWithoutCustomerInput } from "../inputs/CustomerTokenCreateWithoutCustomerInput";
import { CustomerTokenWhereUniqueInput } from "../inputs/CustomerTokenWhereUniqueInput";
export declare class CustomerTokenUncheckedCreateNestedManyWithoutCustomerInput {
    create?: CustomerTokenCreateWithoutCustomerInput[] | undefined;
    connectOrCreate?: CustomerTokenCreateOrConnectWithoutCustomerInput[] | undefined;
    createMany?: CustomerTokenCreateManyCustomerInputEnvelope | undefined;
    connect?: CustomerTokenWhereUniqueInput[] | undefined;
}
