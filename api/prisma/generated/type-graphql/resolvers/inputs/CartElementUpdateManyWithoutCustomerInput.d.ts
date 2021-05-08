import { CartElementCreateManyCustomerInputEnvelope } from "../inputs/CartElementCreateManyCustomerInputEnvelope";
import { CartElementCreateOrConnectWithoutCustomerInput } from "../inputs/CartElementCreateOrConnectWithoutCustomerInput";
import { CartElementCreateWithoutCustomerInput } from "../inputs/CartElementCreateWithoutCustomerInput";
import { CartElementScalarWhereInput } from "../inputs/CartElementScalarWhereInput";
import { CartElementUpdateManyWithWhereWithoutCustomerInput } from "../inputs/CartElementUpdateManyWithWhereWithoutCustomerInput";
import { CartElementUpdateWithWhereUniqueWithoutCustomerInput } from "../inputs/CartElementUpdateWithWhereUniqueWithoutCustomerInput";
import { CartElementUpsertWithWhereUniqueWithoutCustomerInput } from "../inputs/CartElementUpsertWithWhereUniqueWithoutCustomerInput";
import { CartElementWhereUniqueInput } from "../inputs/CartElementWhereUniqueInput";
export declare class CartElementUpdateManyWithoutCustomerInput {
    create?: CartElementCreateWithoutCustomerInput[] | undefined;
    connectOrCreate?: CartElementCreateOrConnectWithoutCustomerInput[] | undefined;
    upsert?: CartElementUpsertWithWhereUniqueWithoutCustomerInput[] | undefined;
    createMany?: CartElementCreateManyCustomerInputEnvelope | undefined;
    connect?: CartElementWhereUniqueInput[] | undefined;
    set?: CartElementWhereUniqueInput[] | undefined;
    disconnect?: CartElementWhereUniqueInput[] | undefined;
    delete?: CartElementWhereUniqueInput[] | undefined;
    update?: CartElementUpdateWithWhereUniqueWithoutCustomerInput[] | undefined;
    updateMany?: CartElementUpdateManyWithWhereWithoutCustomerInput[] | undefined;
    deleteMany?: CartElementScalarWhereInput[] | undefined;
}
