import { GraphQLResolveInfo } from "graphql";
import { CreateOrderItemArgs } from "./args/CreateOrderItemArgs";
import { OrderItem } from "../../../models/OrderItem";
export declare class CreateOrderItemResolver {
    createOrderItem(ctx: any, info: GraphQLResolveInfo, args: CreateOrderItemArgs): Promise<OrderItem>;
}
