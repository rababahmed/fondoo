import { ProductCategoryCreateInput } from "../../../inputs/ProductCategoryCreateInput";
import { ProductCategoryUpdateInput } from "../../../inputs/ProductCategoryUpdateInput";
import { ProductCategoryWhereUniqueInput } from "../../../inputs/ProductCategoryWhereUniqueInput";
export declare class UpsertProductCategoryArgs {
    where: ProductCategoryWhereUniqueInput;
    create: ProductCategoryCreateInput;
    update: ProductCategoryUpdateInput;
}
