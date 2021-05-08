import { OrderElement } from "../../../models/OrderElement";
import { Product } from "../../../models/Product";
import { ProductCategory } from "../../../models/ProductCategory";
import { Restaurant } from "../../../models/Restaurant";
import { ProductCategoryOrderElementArgs } from "./args/ProductCategoryOrderElementArgs";
import { ProductCategoryProductArgs } from "./args/ProductCategoryProductArgs";
export declare class ProductCategoryRelationsResolver {
    restaurants(productCategory: ProductCategory, ctx: any): Promise<Restaurant>;
    Product(productCategory: ProductCategory, ctx: any, args: ProductCategoryProductArgs): Promise<Product[]>;
    OrderElement(productCategory: ProductCategory, ctx: any, args: ProductCategoryOrderElementArgs): Promise<OrderElement[]>;
}
