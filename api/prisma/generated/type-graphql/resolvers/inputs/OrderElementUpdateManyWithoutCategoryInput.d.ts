import { OrderElementCreateManyCategoryInputEnvelope } from "../inputs/OrderElementCreateManyCategoryInputEnvelope";
import { OrderElementCreateOrConnectWithoutCategoryInput } from "../inputs/OrderElementCreateOrConnectWithoutCategoryInput";
import { OrderElementCreateWithoutCategoryInput } from "../inputs/OrderElementCreateWithoutCategoryInput";
import { OrderElementScalarWhereInput } from "../inputs/OrderElementScalarWhereInput";
import { OrderElementUpdateManyWithWhereWithoutCategoryInput } from "../inputs/OrderElementUpdateManyWithWhereWithoutCategoryInput";
import { OrderElementUpdateWithWhereUniqueWithoutCategoryInput } from "../inputs/OrderElementUpdateWithWhereUniqueWithoutCategoryInput";
import { OrderElementUpsertWithWhereUniqueWithoutCategoryInput } from "../inputs/OrderElementUpsertWithWhereUniqueWithoutCategoryInput";
import { OrderElementWhereUniqueInput } from "../inputs/OrderElementWhereUniqueInput";
export declare class OrderElementUpdateManyWithoutCategoryInput {
    create?: OrderElementCreateWithoutCategoryInput[] | undefined;
    connectOrCreate?: OrderElementCreateOrConnectWithoutCategoryInput[] | undefined;
    upsert?: OrderElementUpsertWithWhereUniqueWithoutCategoryInput[] | undefined;
    createMany?: OrderElementCreateManyCategoryInputEnvelope | undefined;
    connect?: OrderElementWhereUniqueInput[] | undefined;
    set?: OrderElementWhereUniqueInput[] | undefined;
    disconnect?: OrderElementWhereUniqueInput[] | undefined;
    delete?: OrderElementWhereUniqueInput[] | undefined;
    update?: OrderElementUpdateWithWhereUniqueWithoutCategoryInput[] | undefined;
    updateMany?: OrderElementUpdateManyWithWhereWithoutCategoryInput[] | undefined;
    deleteMany?: OrderElementScalarWhereInput[] | undefined;
}
