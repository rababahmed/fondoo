import { GraphQLResolveInfo } from "graphql";
import { FindFirstOrderArgs } from "./args/FindFirstOrderArgs";
import { Order } from "../../../models/Order";
export declare class FindFirstOrderResolver {
    findFirstOrder(ctx: any, info: GraphQLResolveInfo, args: FindFirstOrderArgs): Promise<Order | null>;
}
