import { ProductCategoryOrderByInput } from "../../../inputs/ProductCategoryOrderByInput";
import { ProductCategoryWhereInput } from "../../../inputs/ProductCategoryWhereInput";
import { ProductCategoryWhereUniqueInput } from "../../../inputs/ProductCategoryWhereUniqueInput";
export declare class AggregateProductCategoryArgs {
    where?: ProductCategoryWhereInput | undefined;
    orderBy?: ProductCategoryOrderByInput[] | undefined;
    cursor?: ProductCategoryWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
