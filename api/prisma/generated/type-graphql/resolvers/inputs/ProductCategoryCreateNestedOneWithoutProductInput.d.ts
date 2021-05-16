import { ProductCategoryCreateOrConnectWithoutProductInput } from "../inputs/ProductCategoryCreateOrConnectWithoutProductInput";
import { ProductCategoryUncheckedCreateWithoutProductInput } from "../inputs/ProductCategoryUncheckedCreateWithoutProductInput";
import { ProductCategoryWhereUniqueInput } from "../inputs/ProductCategoryWhereUniqueInput";
export declare class ProductCategoryCreateNestedOneWithoutProductInput {
    create?: ProductCategoryUncheckedCreateWithoutProductInput | undefined;
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutProductInput | undefined;
    connect?: ProductCategoryWhereUniqueInput | undefined;
}
