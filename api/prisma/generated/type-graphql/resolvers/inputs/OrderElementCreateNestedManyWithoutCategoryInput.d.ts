import { OrderElementCreateManyCategoryInputEnvelope } from "../inputs/OrderElementCreateManyCategoryInputEnvelope";
import { OrderElementCreateOrConnectWithoutCategoryInput } from "../inputs/OrderElementCreateOrConnectWithoutCategoryInput";
import { OrderElementCreateWithoutCategoryInput } from "../inputs/OrderElementCreateWithoutCategoryInput";
import { OrderElementWhereUniqueInput } from "../inputs/OrderElementWhereUniqueInput";
export declare class OrderElementCreateNestedManyWithoutCategoryInput {
    create?: OrderElementCreateWithoutCategoryInput[] | undefined;
    connectOrCreate?: OrderElementCreateOrConnectWithoutCategoryInput[] | undefined;
    createMany?: OrderElementCreateManyCategoryInputEnvelope | undefined;
    connect?: OrderElementWhereUniqueInput[] | undefined;
}
