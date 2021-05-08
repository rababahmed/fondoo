import { GraphQLResolveInfo } from "graphql";
import { CreateOrderElementArgs } from "./args/CreateOrderElementArgs";
import { OrderElement } from "../../../models/OrderElement";
export declare class CreateOrderElementResolver {
    createOrderElement(ctx: any, info: GraphQLResolveInfo, args: CreateOrderElementArgs): Promise<OrderElement>;
}
