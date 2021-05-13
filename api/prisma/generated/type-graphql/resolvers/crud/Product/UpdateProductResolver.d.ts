import { GraphQLResolveInfo } from "graphql";
import { UpdateProductArgs } from "./args/UpdateProductArgs";
import { Product } from "../../../models/Product";
export declare class UpdateProductResolver {
    updateProduct(ctx: any, info: GraphQLResolveInfo, args: UpdateProductArgs): Promise<Product | null>;
}
