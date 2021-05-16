import { ProductCategoryCreateManyRestaurantsInputEnvelope } from "../inputs/ProductCategoryCreateManyRestaurantsInputEnvelope";
import { ProductCategoryCreateOrConnectWithoutRestaurantsInput } from "../inputs/ProductCategoryCreateOrConnectWithoutRestaurantsInput";
import { ProductCategoryCreateWithoutRestaurantsInput } from "../inputs/ProductCategoryCreateWithoutRestaurantsInput";
import { ProductCategoryWhereUniqueInput } from "../inputs/ProductCategoryWhereUniqueInput";
export declare class ProductCategoryUncheckedCreateNestedManyWithoutRestaurantsInput {
    create?: ProductCategoryCreateWithoutRestaurantsInput[] | undefined;
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutRestaurantsInput[] | undefined;
    createMany?: ProductCategoryCreateManyRestaurantsInputEnvelope | undefined;
    connect?: ProductCategoryWhereUniqueInput[] | undefined;
}
