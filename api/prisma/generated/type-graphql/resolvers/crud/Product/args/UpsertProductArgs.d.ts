import { ProductUncheckedCreateInput } from "../../../inputs/ProductUncheckedCreateInput";
import { ProductUncheckedUpdateInput } from "../../../inputs/ProductUncheckedUpdateInput";
import { ProductWhereUniqueInput } from "../../../inputs/ProductWhereUniqueInput";
export declare class UpsertProductArgs {
    where: ProductWhereUniqueInput;
    create: ProductUncheckedCreateInput;
    update: ProductUncheckedUpdateInput;
}
