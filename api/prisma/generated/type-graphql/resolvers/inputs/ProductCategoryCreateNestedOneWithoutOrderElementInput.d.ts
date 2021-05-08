import { ProductCategoryCreateOrConnectWithoutOrderElementInput } from "../inputs/ProductCategoryCreateOrConnectWithoutOrderElementInput";
import { ProductCategoryCreateWithoutOrderElementInput } from "../inputs/ProductCategoryCreateWithoutOrderElementInput";
import { ProductCategoryWhereUniqueInput } from "../inputs/ProductCategoryWhereUniqueInput";
export declare class ProductCategoryCreateNestedOneWithoutOrderElementInput {
    create?: ProductCategoryCreateWithoutOrderElementInput | undefined;
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutOrderElementInput | undefined;
    connect?: ProductCategoryWhereUniqueInput | undefined;
}
