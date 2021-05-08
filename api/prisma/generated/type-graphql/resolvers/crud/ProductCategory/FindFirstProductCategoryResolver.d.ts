import { GraphQLResolveInfo } from "graphql";
import { FindFirstProductCategoryArgs } from "./args/FindFirstProductCategoryArgs";
import { ProductCategory } from "../../../models/ProductCategory";
export declare class FindFirstProductCategoryResolver {
    findFirstProductCategory(ctx: any, info: GraphQLResolveInfo, args: FindFirstProductCategoryArgs): Promise<ProductCategory | null>;
}
