import { OrderCreateManyCustomerInputEnvelope } from "../inputs/OrderCreateManyCustomerInputEnvelope";
import { OrderCreateOrConnectWithoutCustomerInput } from "../inputs/OrderCreateOrConnectWithoutCustomerInput";
import { OrderCreateWithoutCustomerInput } from "../inputs/OrderCreateWithoutCustomerInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderCreateNestedManyWithoutCustomerInput {
    create?: OrderCreateWithoutCustomerInput[] | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput[] | undefined;
    createMany?: OrderCreateManyCustomerInputEnvelope | undefined;
    connect?: OrderWhereUniqueInput[] | undefined;
}
