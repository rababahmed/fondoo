import { ProductCreateManyOrderInputEnvelope } from "../inputs/ProductCreateManyOrderInputEnvelope";
import { ProductCreateOrConnectWithoutOrderInput } from "../inputs/ProductCreateOrConnectWithoutOrderInput";
import { ProductCreateWithoutOrderInput } from "../inputs/ProductCreateWithoutOrderInput";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUpdateManyWithWhereWithoutOrderInput } from "../inputs/ProductUpdateManyWithWhereWithoutOrderInput";
import { ProductUpdateWithWhereUniqueWithoutOrderInput } from "../inputs/ProductUpdateWithWhereUniqueWithoutOrderInput";
import { ProductUpsertWithWhereUniqueWithoutOrderInput } from "../inputs/ProductUpsertWithWhereUniqueWithoutOrderInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductUpdateManyWithoutOrderInput {
    create?: ProductCreateWithoutOrderInput[] | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutOrderInput[] | undefined;
    upsert?: ProductUpsertWithWhereUniqueWithoutOrderInput[] | undefined;
    createMany?: ProductCreateManyOrderInputEnvelope | undefined;
    connect?: ProductWhereUniqueInput[] | undefined;
    set?: ProductWhereUniqueInput[] | undefined;
    disconnect?: ProductWhereUniqueInput[] | undefined;
    delete?: ProductWhereUniqueInput[] | undefined;
    update?: ProductUpdateWithWhereUniqueWithoutOrderInput[] | undefined;
    updateMany?: ProductUpdateManyWithWhereWithoutOrderInput[] | undefined;
    deleteMany?: ProductScalarWhereInput[] | undefined;
}
