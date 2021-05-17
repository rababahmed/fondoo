import { GraphQLResolveInfo } from "graphql";
import { FindFirstOrderItemArgs } from "./args/FindFirstOrderItemArgs";
import { OrderItem } from "../../../models/OrderItem";
export declare class FindFirstOrderItemResolver {
    findFirstOrderItem(ctx: any, info: GraphQLResolveInfo, args: FindFirstOrderItemArgs): Promise<OrderItem | null>;
}
