import { Product } from "../../../models/Product";
import { ProductCategory } from "../../../models/ProductCategory";
import { Restaurant } from "../../../models/Restaurant";
import { ProductCategoryProductArgs } from "./args/ProductCategoryProductArgs";
export declare class ProductCategoryRelationsResolver {
    restaurants(productCategory: ProductCategory, ctx: any): Promise<Restaurant>;
    Product(productCategory: ProductCategory, ctx: any, args: ProductCategoryProductArgs): Promise<Product[]>;
}
