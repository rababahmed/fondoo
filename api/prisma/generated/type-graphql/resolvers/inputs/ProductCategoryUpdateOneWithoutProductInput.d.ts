import { ProductCategoryCreateOrConnectWithoutProductInput } from "../inputs/ProductCategoryCreateOrConnectWithoutProductInput";
import { ProductCategoryUncheckedCreateWithoutProductInput } from "../inputs/ProductCategoryUncheckedCreateWithoutProductInput";
import { ProductCategoryUncheckedUpdateWithoutProductInput } from "../inputs/ProductCategoryUncheckedUpdateWithoutProductInput";
import { ProductCategoryUpsertWithoutProductInput } from "../inputs/ProductCategoryUpsertWithoutProductInput";
import { ProductCategoryWhereUniqueInput } from "../inputs/ProductCategoryWhereUniqueInput";
export declare class ProductCategoryUpdateOneWithoutProductInput {
    create?: ProductCategoryUncheckedCreateWithoutProductInput | undefined;
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutProductInput | undefined;
    upsert?: ProductCategoryUpsertWithoutProductInput | undefined;
    connect?: ProductCategoryWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: ProductCategoryUncheckedUpdateWithoutProductInput | undefined;
}
