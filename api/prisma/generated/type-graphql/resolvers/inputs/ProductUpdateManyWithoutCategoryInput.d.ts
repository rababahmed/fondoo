import { ProductCreateManyCategoryInputEnvelope } from "../inputs/ProductCreateManyCategoryInputEnvelope";
import { ProductCreateOrConnectWithoutCategoryInput } from "../inputs/ProductCreateOrConnectWithoutCategoryInput";
import { ProductCreateWithoutCategoryInput } from "../inputs/ProductCreateWithoutCategoryInput";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUpdateManyWithWhereWithoutCategoryInput } from "../inputs/ProductUpdateManyWithWhereWithoutCategoryInput";
import { ProductUpdateWithWhereUniqueWithoutCategoryInput } from "../inputs/ProductUpdateWithWhereUniqueWithoutCategoryInput";
import { ProductUpsertWithWhereUniqueWithoutCategoryInput } from "../inputs/ProductUpsertWithWhereUniqueWithoutCategoryInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductUpdateManyWithoutCategoryInput {
    create?: ProductCreateWithoutCategoryInput[] | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput[] | undefined;
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput[] | undefined;
    createMany?: ProductCreateManyCategoryInputEnvelope | undefined;
    connect?: ProductWhereUniqueInput[] | undefined;
    set?: ProductWhereUniqueInput[] | undefined;
    disconnect?: ProductWhereUniqueInput[] | undefined;
    delete?: ProductWhereUniqueInput[] | undefined;
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput[] | undefined;
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput[] | undefined;
    deleteMany?: ProductScalarWhereInput[] | undefined;
}
