import { GraphQLResolveInfo } from "graphql";
import { FindManyOrderArgs } from "./args/FindManyOrderArgs";
import { Order } from "../../../models/Order";
export declare class FindManyOrderResolver {
    findManyOrder(ctx: any, info: GraphQLResolveInfo, args: FindManyOrderArgs): Promise<Order[]>;
}
