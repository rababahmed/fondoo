import { ProductCategoryCreateOrConnectWithoutOrderElementInput } from "../inputs/ProductCategoryCreateOrConnectWithoutOrderElementInput";
import { ProductCategoryCreateWithoutOrderElementInput } from "../inputs/ProductCategoryCreateWithoutOrderElementInput";
import { ProductCategoryUpdateWithoutOrderElementInput } from "../inputs/ProductCategoryUpdateWithoutOrderElementInput";
import { ProductCategoryUpsertWithoutOrderElementInput } from "../inputs/ProductCategoryUpsertWithoutOrderElementInput";
import { ProductCategoryWhereUniqueInput } from "../inputs/ProductCategoryWhereUniqueInput";
export declare class ProductCategoryUpdateOneRequiredWithoutOrderElementInput {
    create?: ProductCategoryCreateWithoutOrderElementInput | undefined;
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutOrderElementInput | undefined;
    upsert?: ProductCategoryUpsertWithoutOrderElementInput | undefined;
    connect?: ProductCategoryWhereUniqueInput | undefined;
    update?: ProductCategoryUpdateWithoutOrderElementInput | undefined;
}
