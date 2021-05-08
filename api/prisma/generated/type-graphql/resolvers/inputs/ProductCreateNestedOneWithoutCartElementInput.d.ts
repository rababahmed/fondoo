import { ProductCreateOrConnectWithoutCartElementInput } from "../inputs/ProductCreateOrConnectWithoutCartElementInput";
import { ProductCreateWithoutCartElementInput } from "../inputs/ProductCreateWithoutCartElementInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductCreateNestedOneWithoutCartElementInput {
    create?: ProductCreateWithoutCartElementInput | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutCartElementInput | undefined;
    connect?: ProductWhereUniqueInput | undefined;
}
