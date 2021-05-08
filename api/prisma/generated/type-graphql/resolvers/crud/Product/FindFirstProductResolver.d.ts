import { GraphQLResolveInfo } from "graphql";
import { FindFirstProductArgs } from "./args/FindFirstProductArgs";
import { Product } from "../../../models/Product";
export declare class FindFirstProductResolver {
    findFirstProduct(ctx: any, info: GraphQLResolveInfo, args: FindFirstProductArgs): Promise<Product | null>;
}
