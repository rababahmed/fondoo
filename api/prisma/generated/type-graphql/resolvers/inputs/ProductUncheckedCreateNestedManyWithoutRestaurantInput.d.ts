import { ProductCreateManyRestaurantInputEnvelope } from "../inputs/ProductCreateManyRestaurantInputEnvelope";
import { ProductCreateOrConnectWithoutRestaurantInput } from "../inputs/ProductCreateOrConnectWithoutRestaurantInput";
import { ProductCreateWithoutRestaurantInput } from "../inputs/ProductCreateWithoutRestaurantInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductUncheckedCreateNestedManyWithoutRestaurantInput {
    create?: ProductCreateWithoutRestaurantInput[] | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutRestaurantInput[] | undefined;
    createMany?: ProductCreateManyRestaurantInputEnvelope | undefined;
    connect?: ProductWhereUniqueInput[] | undefined;
}
