import { ProductCategoryCreateOrConnectWithoutProductInput } from "../inputs/ProductCategoryCreateOrConnectWithoutProductInput";
import { ProductCategoryCreateWithoutProductInput } from "../inputs/ProductCategoryCreateWithoutProductInput";
import { ProductCategoryUpdateWithoutProductInput } from "../inputs/ProductCategoryUpdateWithoutProductInput";
import { ProductCategoryUpsertWithoutProductInput } from "../inputs/ProductCategoryUpsertWithoutProductInput";
import { ProductCategoryWhereUniqueInput } from "../inputs/ProductCategoryWhereUniqueInput";
export declare class ProductCategoryUpdateOneRequiredWithoutProductInput {
    create?: ProductCategoryCreateWithoutProductInput | undefined;
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutProductInput | undefined;
    upsert?: ProductCategoryUpsertWithoutProductInput | undefined;
    connect?: ProductCategoryWhereUniqueInput | undefined;
    update?: ProductCategoryUpdateWithoutProductInput | undefined;
}
