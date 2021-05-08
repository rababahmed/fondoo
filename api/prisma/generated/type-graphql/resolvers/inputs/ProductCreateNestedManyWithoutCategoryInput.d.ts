import { ProductCreateManyCategoryInputEnvelope } from "../inputs/ProductCreateManyCategoryInputEnvelope";
import { ProductCreateOrConnectWithoutCategoryInput } from "../inputs/ProductCreateOrConnectWithoutCategoryInput";
import { ProductCreateWithoutCategoryInput } from "../inputs/ProductCreateWithoutCategoryInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductCreateNestedManyWithoutCategoryInput {
    create?: ProductCreateWithoutCategoryInput[] | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput[] | undefined;
    createMany?: ProductCreateManyCategoryInputEnvelope | undefined;
    connect?: ProductWhereUniqueInput[] | undefined;
}
