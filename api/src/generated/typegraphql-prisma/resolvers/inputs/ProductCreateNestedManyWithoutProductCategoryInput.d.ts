import { ProductCreateManyProductCategoryInputEnvelope } from "../inputs/ProductCreateManyProductCategoryInputEnvelope";
import { ProductCreateOrConnectWithoutProductCategoryInput } from "../inputs/ProductCreateOrConnectWithoutProductCategoryInput";
import { ProductCreateWithoutProductCategoryInput } from "../inputs/ProductCreateWithoutProductCategoryInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductCreateNestedManyWithoutProductCategoryInput {
    create?: ProductCreateWithoutProductCategoryInput[] | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutProductCategoryInput[] | undefined;
    createMany?: ProductCreateManyProductCategoryInputEnvelope | undefined;
    connect?: ProductWhereUniqueInput[] | undefined;
}
