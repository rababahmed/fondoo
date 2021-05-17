import { ProductCreateOrConnectWithoutOrderItemInput } from "../inputs/ProductCreateOrConnectWithoutOrderItemInput";
import { ProductCreateWithoutOrderItemInput } from "../inputs/ProductCreateWithoutOrderItemInput";
import { ProductUpdateWithoutOrderItemInput } from "../inputs/ProductUpdateWithoutOrderItemInput";
import { ProductUpsertWithoutOrderItemInput } from "../inputs/ProductUpsertWithoutOrderItemInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductUpdateOneRequiredWithoutOrderItemInput {
    create?: ProductCreateWithoutOrderItemInput | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemInput | undefined;
    upsert?: ProductUpsertWithoutOrderItemInput | undefined;
    connect?: ProductWhereUniqueInput | undefined;
    update?: ProductUpdateWithoutOrderItemInput | undefined;
}
