import { OrderItem } from "../../../models/OrderItem";
import { Product } from "../../../models/Product";
import { ProductCategory } from "../../../models/ProductCategory";
import { Restaurant } from "../../../models/Restaurant";
import { ProductOrderItemArgs } from "./args/ProductOrderItemArgs";
export declare class ProductRelationsResolver {
    ProductCategory(product: Product, ctx: any): Promise<ProductCategory | null>;
    Restaurant(product: Product, ctx: any): Promise<Restaurant | null>;
    OrderItem(product: Product, ctx: any, args: ProductOrderItemArgs): Promise<OrderItem[]>;
}
