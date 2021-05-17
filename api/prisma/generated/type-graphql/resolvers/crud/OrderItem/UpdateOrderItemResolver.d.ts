import { GraphQLResolveInfo } from "graphql";
import { UpdateOrderItemArgs } from "./args/UpdateOrderItemArgs";
import { OrderItem } from "../../../models/OrderItem";
export declare class UpdateOrderItemResolver {
    updateOrderItem(ctx: any, info: GraphQLResolveInfo, args: UpdateOrderItemArgs): Promise<OrderItem | null>;
}
