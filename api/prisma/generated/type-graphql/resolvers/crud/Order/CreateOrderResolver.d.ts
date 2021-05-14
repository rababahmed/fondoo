import { GraphQLResolveInfo } from "graphql";
import { CreateOrderArgs } from "./args/CreateOrderArgs";
import { Order } from "../../../models/Order";
export declare class CreateOrderResolver {
    createOrder(ctx: any, info: GraphQLResolveInfo, args: CreateOrderArgs): Promise<Order>;
}
