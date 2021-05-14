import { OrderCreateManyRestaurantInputEnvelope } from "../inputs/OrderCreateManyRestaurantInputEnvelope";
import { OrderCreateOrConnectWithoutRestaurantInput } from "../inputs/OrderCreateOrConnectWithoutRestaurantInput";
import { OrderCreateWithoutRestaurantInput } from "../inputs/OrderCreateWithoutRestaurantInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderCreateNestedManyWithoutRestaurantInput {
    create?: OrderCreateWithoutRestaurantInput[] | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutRestaurantInput[] | undefined;
    createMany?: OrderCreateManyRestaurantInputEnvelope | undefined;
    connect?: OrderWhereUniqueInput[] | undefined;
}
