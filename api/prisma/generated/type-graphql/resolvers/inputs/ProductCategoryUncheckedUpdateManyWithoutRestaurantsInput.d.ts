import { ProductCategoryCreateManyRestaurantsInputEnvelope } from "../inputs/ProductCategoryCreateManyRestaurantsInputEnvelope";
import { ProductCategoryCreateOrConnectWithoutRestaurantsInput } from "../inputs/ProductCategoryCreateOrConnectWithoutRestaurantsInput";
import { ProductCategoryCreateWithoutRestaurantsInput } from "../inputs/ProductCategoryCreateWithoutRestaurantsInput";
import { ProductCategoryScalarWhereInput } from "../inputs/ProductCategoryScalarWhereInput";
import { ProductCategoryUpdateManyWithWhereWithoutRestaurantsInput } from "../inputs/ProductCategoryUpdateManyWithWhereWithoutRestaurantsInput";
import { ProductCategoryUpdateWithWhereUniqueWithoutRestaurantsInput } from "../inputs/ProductCategoryUpdateWithWhereUniqueWithoutRestaurantsInput";
import { ProductCategoryUpsertWithWhereUniqueWithoutRestaurantsInput } from "../inputs/ProductCategoryUpsertWithWhereUniqueWithoutRestaurantsInput";
import { ProductCategoryWhereUniqueInput } from "../inputs/ProductCategoryWhereUniqueInput";
export declare class ProductCategoryUncheckedUpdateManyWithoutRestaurantsInput {
    create?: ProductCategoryCreateWithoutRestaurantsInput[] | undefined;
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutRestaurantsInput[] | undefined;
    upsert?: ProductCategoryUpsertWithWhereUniqueWithoutRestaurantsInput[] | undefined;
    createMany?: ProductCategoryCreateManyRestaurantsInputEnvelope | undefined;
    connect?: ProductCategoryWhereUniqueInput[] | undefined;
    set?: ProductCategoryWhereUniqueInput[] | undefined;
    disconnect?: ProductCategoryWhereUniqueInput[] | undefined;
    delete?: ProductCategoryWhereUniqueInput[] | undefined;
    update?: ProductCategoryUpdateWithWhereUniqueWithoutRestaurantsInput[] | undefined;
    updateMany?: ProductCategoryUpdateManyWithWhereWithoutRestaurantsInput[] | undefined;
    deleteMany?: ProductCategoryScalarWhereInput[] | undefined;
}
