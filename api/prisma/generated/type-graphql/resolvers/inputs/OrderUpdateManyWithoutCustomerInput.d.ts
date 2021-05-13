import { OrderCreateManyCustomerInputEnvelope } from "../inputs/OrderCreateManyCustomerInputEnvelope";
import { OrderCreateOrConnectWithoutCustomerInput } from "../inputs/OrderCreateOrConnectWithoutCustomerInput";
import { OrderCreateWithoutCustomerInput } from "../inputs/OrderCreateWithoutCustomerInput";
import { OrderScalarWhereInput } from "../inputs/OrderScalarWhereInput";
import { OrderUpdateManyWithWhereWithoutCustomerInput } from "../inputs/OrderUpdateManyWithWhereWithoutCustomerInput";
import { OrderUpdateWithWhereUniqueWithoutCustomerInput } from "../inputs/OrderUpdateWithWhereUniqueWithoutCustomerInput";
import { OrderUpsertWithWhereUniqueWithoutCustomerInput } from "../inputs/OrderUpsertWithWhereUniqueWithoutCustomerInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderUpdateManyWithoutCustomerInput {
    create?: OrderCreateWithoutCustomerInput[] | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput[] | undefined;
    upsert?: OrderUpsertWithWhereUniqueWithoutCustomerInput[] | undefined;
    createMany?: OrderCreateManyCustomerInputEnvelope | undefined;
    connect?: OrderWhereUniqueInput[] | undefined;
    set?: OrderWhereUniqueInput[] | undefined;
    disconnect?: OrderWhereUniqueInput[] | undefined;
    delete?: OrderWhereUniqueInput[] | undefined;
    update?: OrderUpdateWithWhereUniqueWithoutCustomerInput[] | undefined;
    updateMany?: OrderUpdateManyWithWhereWithoutCustomerInput[] | undefined;
    deleteMany?: OrderScalarWhereInput[] | undefined;
}
