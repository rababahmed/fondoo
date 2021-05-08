import { ProductCreateOrConnectWithoutCartElementInput } from "../inputs/ProductCreateOrConnectWithoutCartElementInput";
import { ProductCreateWithoutCartElementInput } from "../inputs/ProductCreateWithoutCartElementInput";
import { ProductUpdateWithoutCartElementInput } from "../inputs/ProductUpdateWithoutCartElementInput";
import { ProductUpsertWithoutCartElementInput } from "../inputs/ProductUpsertWithoutCartElementInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductUpdateOneRequiredWithoutCartElementInput {
    create?: ProductCreateWithoutCartElementInput | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutCartElementInput | undefined;
    upsert?: ProductUpsertWithoutCartElementInput | undefined;
    connect?: ProductWhereUniqueInput | undefined;
    update?: ProductUpdateWithoutCartElementInput | undefined;
}
