import { GraphQLResolveInfo } from "graphql";
import { DeleteOrderItemArgs } from "./args/DeleteOrderItemArgs";
import { OrderItem } from "../../../models/OrderItem";
export declare class DeleteOrderItemResolver {
    deleteOrderItem(ctx: any, info: GraphQLResolveInfo, args: DeleteOrderItemArgs): Promise<OrderItem | null>;
}
