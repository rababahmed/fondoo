import { CustomerTokenCreateManyCustomerInputEnvelope } from "../inputs/CustomerTokenCreateManyCustomerInputEnvelope";
import { CustomerTokenCreateOrConnectWithoutCustomerInput } from "../inputs/CustomerTokenCreateOrConnectWithoutCustomerInput";
import { CustomerTokenCreateWithoutCustomerInput } from "../inputs/CustomerTokenCreateWithoutCustomerInput";
import { CustomerTokenScalarWhereInput } from "../inputs/CustomerTokenScalarWhereInput";
import { CustomerTokenUpdateManyWithWhereWithoutCustomerInput } from "../inputs/CustomerTokenUpdateManyWithWhereWithoutCustomerInput";
import { CustomerTokenUpdateWithWhereUniqueWithoutCustomerInput } from "../inputs/CustomerTokenUpdateWithWhereUniqueWithoutCustomerInput";
import { CustomerTokenUpsertWithWhereUniqueWithoutCustomerInput } from "../inputs/CustomerTokenUpsertWithWhereUniqueWithoutCustomerInput";
import { CustomerTokenWhereUniqueInput } from "../inputs/CustomerTokenWhereUniqueInput";
export declare class CustomerTokenUpdateManyWithoutCustomerInput {
    create?: CustomerTokenCreateWithoutCustomerInput[] | undefined;
    connectOrCreate?: CustomerTokenCreateOrConnectWithoutCustomerInput[] | undefined;
    upsert?: CustomerTokenUpsertWithWhereUniqueWithoutCustomerInput[] | undefined;
    createMany?: CustomerTokenCreateManyCustomerInputEnvelope | undefined;
    connect?: CustomerTokenWhereUniqueInput[] | undefined;
    set?: CustomerTokenWhereUniqueInput[] | undefined;
    disconnect?: CustomerTokenWhereUniqueInput[] | undefined;
    delete?: CustomerTokenWhereUniqueInput[] | undefined;
    update?: CustomerTokenUpdateWithWhereUniqueWithoutCustomerInput[] | undefined;
    updateMany?: CustomerTokenUpdateManyWithWhereWithoutCustomerInput[] | undefined;
    deleteMany?: CustomerTokenScalarWhereInput[] | undefined;
}
