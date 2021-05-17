import { GraphQLResolveInfo } from "graphql";
import { FindUniqueOrderItemArgs } from "./args/FindUniqueOrderItemArgs";
import { OrderItem } from "../../../models/OrderItem";
export declare class FindUniqueOrderItemResolver {
    orderItem(ctx: any, info: GraphQLResolveInfo, args: FindUniqueOrderItemArgs): Promise<OrderItem | null>;
}
