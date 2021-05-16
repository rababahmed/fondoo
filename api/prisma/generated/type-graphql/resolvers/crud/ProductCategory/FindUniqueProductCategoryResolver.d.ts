import { GraphQLResolveInfo } from "graphql";
import { FindUniqueProductCategoryArgs } from "./args/FindUniqueProductCategoryArgs";
import { ProductCategory } from "../../../models/ProductCategory";
export declare class FindUniqueProductCategoryResolver {
    findUniqueProductCategory(ctx: any, info: GraphQLResolveInfo, args: FindUniqueProductCategoryArgs): Promise<ProductCategory | null>;
}
