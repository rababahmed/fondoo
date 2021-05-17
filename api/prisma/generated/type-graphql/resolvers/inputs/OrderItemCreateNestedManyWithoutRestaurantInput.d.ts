import { OrderItemCreateManyRestaurantInputEnvelope } from "../inputs/OrderItemCreateManyRestaurantInputEnvelope";
import { OrderItemCreateOrConnectWithoutRestaurantInput } from "../inputs/OrderItemCreateOrConnectWithoutRestaurantInput";
import { OrderItemCreateWithoutRestaurantInput } from "../inputs/OrderItemCreateWithoutRestaurantInput";
import { OrderItemWhereUniqueInput } from "../inputs/OrderItemWhereUniqueInput";
export declare class OrderItemCreateNestedManyWithoutRestaurantInput {
    create?: OrderItemCreateWithoutRestaurantInput[] | undefined;
    connectOrCreate?: OrderItemCreateOrConnectWithoutRestaurantInput[] | undefined;
    createMany?: OrderItemCreateManyRestaurantInputEnvelope | undefined;
    connect?: OrderItemWhereUniqueInput[] | undefined;
}
