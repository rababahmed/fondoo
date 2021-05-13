import { ProductCategoryCreateOrConnectWithoutProductInput } from "../inputs/ProductCategoryCreateOrConnectWithoutProductInput";
import { ProductCategoryCreateWithoutProductInput } from "../inputs/ProductCategoryCreateWithoutProductInput";
import { ProductCategoryWhereUniqueInput } from "../inputs/ProductCategoryWhereUniqueInput";
export declare class ProductCategoryCreateNestedOneWithoutProductInput {
    create?: ProductCategoryCreateWithoutProductInput | undefined;
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutProductInput | undefined;
    connect?: ProductCategoryWhereUniqueInput | undefined;
}
