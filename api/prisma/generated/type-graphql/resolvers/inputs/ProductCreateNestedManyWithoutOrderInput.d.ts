import { ProductCreateManyOrderInputEnvelope } from "../inputs/ProductCreateManyOrderInputEnvelope";
import { ProductCreateOrConnectWithoutOrderInput } from "../inputs/ProductCreateOrConnectWithoutOrderInput";
import { ProductCreateWithoutOrderInput } from "../inputs/ProductCreateWithoutOrderInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductCreateNestedManyWithoutOrderInput {
    create?: ProductCreateWithoutOrderInput[] | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutOrderInput[] | undefined;
    createMany?: ProductCreateManyOrderInputEnvelope | undefined;
    connect?: ProductWhereUniqueInput[] | undefined;
}
