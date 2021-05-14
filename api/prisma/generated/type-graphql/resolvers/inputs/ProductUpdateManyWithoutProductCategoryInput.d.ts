import { ProductCreateManyProductCategoryInputEnvelope } from "../inputs/ProductCreateManyProductCategoryInputEnvelope";
import { ProductCreateOrConnectWithoutProductCategoryInput } from "../inputs/ProductCreateOrConnectWithoutProductCategoryInput";
import { ProductCreateWithoutProductCategoryInput } from "../inputs/ProductCreateWithoutProductCategoryInput";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUpdateManyWithWhereWithoutProductCategoryInput } from "../inputs/ProductUpdateManyWithWhereWithoutProductCategoryInput";
import { ProductUpdateWithWhereUniqueWithoutProductCategoryInput } from "../inputs/ProductUpdateWithWhereUniqueWithoutProductCategoryInput";
import { ProductUpsertWithWhereUniqueWithoutProductCategoryInput } from "../inputs/ProductUpsertWithWhereUniqueWithoutProductCategoryInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductUpdateManyWithoutProductCategoryInput {
    create?: ProductCreateWithoutProductCategoryInput[] | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutProductCategoryInput[] | undefined;
    upsert?: ProductUpsertWithWhereUniqueWithoutProductCategoryInput[] | undefined;
    createMany?: ProductCreateManyProductCategoryInputEnvelope | undefined;
    connect?: ProductWhereUniqueInput[] | undefined;
    set?: ProductWhereUniqueInput[] | undefined;
    disconnect?: ProductWhereUniqueInput[] | undefined;
    delete?: ProductWhereUniqueInput[] | undefined;
    update?: ProductUpdateWithWhereUniqueWithoutProductCategoryInput[] | undefined;
    updateMany?: ProductUpdateManyWithWhereWithoutProductCategoryInput[] | undefined;
    deleteMany?: ProductScalarWhereInput[] | undefined;
}
