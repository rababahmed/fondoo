import { ProductCreateOrConnectWithoutOrderItemInput } from "../inputs/ProductCreateOrConnectWithoutOrderItemInput";
import { ProductCreateWithoutOrderItemInput } from "../inputs/ProductCreateWithoutOrderItemInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductCreateNestedOneWithoutOrderItemInput {
    create?: ProductCreateWithoutOrderItemInput | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemInput | undefined;
    connect?: ProductWhereUniqueInput | undefined;
}
