import { GraphQLResolveInfo } from "graphql";
import { UpdateProductCategoryArgs } from "./args/UpdateProductCategoryArgs";
import { ProductCategory } from "../../../models/ProductCategory";
export declare class UpdateProductCategoryResolver {
    updateProductCategory(ctx: any, info: GraphQLResolveInfo, args: UpdateProductCategoryArgs): Promise<ProductCategory | null>;
}
