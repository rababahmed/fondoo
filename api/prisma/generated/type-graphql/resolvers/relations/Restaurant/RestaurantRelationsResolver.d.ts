import { Customer } from "../../../models/Customer";
import { DeliveryZone } from "../../../models/DeliveryZone";
import { Order } from "../../../models/Order";
import { Product } from "../../../models/Product";
import { ProductCategory } from "../../../models/ProductCategory";
import { Restaurant } from "../../../models/Restaurant";
import { Schedule } from "../../../models/Schedule";
import { User } from "../../../models/User";
import { RestaurantCustomersArgs } from "./args/RestaurantCustomersArgs";
import { RestaurantDeliveryZonesArgs } from "./args/RestaurantDeliveryZonesArgs";
import { RestaurantOrdersArgs } from "./args/RestaurantOrdersArgs";
import { RestaurantProductCategoryArgs } from "./args/RestaurantProductCategoryArgs";
import { RestaurantProductsArgs } from "./args/RestaurantProductsArgs";
import { RestaurantScheduleArgs } from "./args/RestaurantScheduleArgs";
import { RestaurantUsersArgs } from "./args/RestaurantUsersArgs";
export declare class RestaurantRelationsResolver {
    products(restaurant: Restaurant, ctx: any, args: RestaurantProductsArgs): Promise<Product[]>;
    schedule(restaurant: Restaurant, ctx: any, args: RestaurantScheduleArgs): Promise<Schedule[]>;
    deliveryZones(restaurant: Restaurant, ctx: any, args: RestaurantDeliveryZonesArgs): Promise<DeliveryZone[]>;
    customers(restaurant: Restaurant, ctx: any, args: RestaurantCustomersArgs): Promise<Customer[]>;
    orders(restaurant: Restaurant, ctx: any, args: RestaurantOrdersArgs): Promise<Order[]>;
    productCategory(restaurant: Restaurant, ctx: any, args: RestaurantProductCategoryArgs): Promise<ProductCategory[]>;
    users(restaurant: Restaurant, ctx: any, args: RestaurantUsersArgs): Promise<User[]>;
}
