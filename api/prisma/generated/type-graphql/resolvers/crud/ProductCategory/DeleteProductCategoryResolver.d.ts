import { GraphQLResolveInfo } from "graphql";
import { DeleteProductCategoryArgs } from "./args/DeleteProductCategoryArgs";
import { ProductCategory } from "../../../models/ProductCategory";
export declare class DeleteProductCategoryResolver {
    deleteProductCategory(ctx: any, info: GraphQLResolveInfo, args: DeleteProductCategoryArgs): Promise<ProductCategory | null>;
}
