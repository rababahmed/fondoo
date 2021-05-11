import { ProductCreateManyRestaurantInputEnvelope } from "../inputs/ProductCreateManyRestaurantInputEnvelope";
import { ProductCreateOrConnectWithoutRestaurantInput } from "../inputs/ProductCreateOrConnectWithoutRestaurantInput";
import { ProductCreateWithoutRestaurantInput } from "../inputs/ProductCreateWithoutRestaurantInput";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUpdateManyWithWhereWithoutRestaurantInput } from "../inputs/ProductUpdateManyWithWhereWithoutRestaurantInput";
import { ProductUpdateWithWhereUniqueWithoutRestaurantInput } from "../inputs/ProductUpdateWithWhereUniqueWithoutRestaurantInput";
import { ProductUpsertWithWhereUniqueWithoutRestaurantInput } from "../inputs/ProductUpsertWithWhereUniqueWithoutRestaurantInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductUpdateManyWithoutRestaurantInput {
    create?: ProductCreateWithoutRestaurantInput[] | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutRestaurantInput[] | undefined;
    upsert?: ProductUpsertWithWhereUniqueWithoutRestaurantInput[] | undefined;
    createMany?: ProductCreateManyRestaurantInputEnvelope | undefined;
    connect?: ProductWhereUniqueInput[] | undefined;
    set?: ProductWhereUniqueInput[] | undefined;
    disconnect?: ProductWhereUniqueInput[] | undefined;
    delete?: ProductWhereUniqueInput[] | undefined;
    update?: ProductUpdateWithWhereUniqueWithoutRestaurantInput[] | undefined;
    updateMany?: ProductUpdateManyWithWhereWithoutRestaurantInput[] | undefined;
    deleteMany?: ProductScalarWhereInput[] | undefined;
}
