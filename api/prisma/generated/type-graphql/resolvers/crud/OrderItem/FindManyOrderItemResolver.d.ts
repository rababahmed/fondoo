import { GraphQLResolveInfo } from "graphql";
import { FindManyOrderItemArgs } from "./args/FindManyOrderItemArgs";
import { OrderItem } from "../../../models/OrderItem";
export declare class FindManyOrderItemResolver {
    orderItems(ctx: any, info: GraphQLResolveInfo, args: FindManyOrderItemArgs): Promise<OrderItem[]>;
}
