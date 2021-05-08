import { GraphQLResolveInfo } from "graphql";
import { DeleteProductArgs } from "./args/DeleteProductArgs";
import { Product } from "../../../models/Product";
export declare class DeleteProductResolver {
    deleteProduct(ctx: any, info: GraphQLResolveInfo, args: DeleteProductArgs): Promise<Product | null>;
}
