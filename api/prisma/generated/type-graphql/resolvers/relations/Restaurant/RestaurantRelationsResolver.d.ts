import { Customer } from "../../../models/Customer";
import { DeliveryZone } from "../../../models/DeliveryZone";
import { Order } from "../../../models/Order";
import { OrderItem } from "../../../models/OrderItem";
import { Product } from "../../../models/Product";
import { ProductCategory } from "../../../models/ProductCategory";
import { Restaurant } from "../../../models/Restaurant";
import { RestaurantPlan } from "../../../models/RestaurantPlan";
import { Schedule } from "../../../models/Schedule";
import { User } from "../../../models/User";
import { RestaurantCustomersArgs } from "./args/RestaurantCustomersArgs";
import { RestaurantDeliveryZonesArgs } from "./args/RestaurantDeliveryZonesArgs";
import { RestaurantOrderItemsArgs } from "./args/RestaurantOrderItemsArgs";
import { RestaurantOrdersArgs } from "./args/RestaurantOrdersArgs";
import { RestaurantProductCategoryArgs } from "./args/RestaurantProductCategoryArgs";
import { RestaurantProductsArgs } from "./args/RestaurantProductsArgs";
import { RestaurantSchedulesArgs } from "./args/RestaurantSchedulesArgs";
import { RestaurantUsersArgs } from "./args/RestaurantUsersArgs";
export declare class RestaurantRelationsResolver {
    plan(restaurant: Restaurant, ctx: any): Promise<RestaurantPlan | null>;
    schedules(restaurant: Restaurant, ctx: any, args: RestaurantSchedulesArgs): Promise<Schedule[]>;
    deliveryZones(restaurant: Restaurant, ctx: any, args: RestaurantDeliveryZonesArgs): Promise<DeliveryZone[]>;
    customers(restaurant: Restaurant, ctx: any, args: RestaurantCustomersArgs): Promise<Customer[]>;
    orders(restaurant: Restaurant, ctx: any, args: RestaurantOrdersArgs): Promise<Order[]>;
    orderItems(restaurant: Restaurant, ctx: any, args: RestaurantOrderItemsArgs): Promise<OrderItem[]>;
    productCategory(restaurant: Restaurant, ctx: any, args: RestaurantProductCategoryArgs): Promise<ProductCategory[]>;
    products(restaurant: Restaurant, ctx: any, args: RestaurantProductsArgs): Promise<Product[]>;
    users(restaurant: Restaurant, ctx: any, args: RestaurantUsersArgs): Promise<User[]>;
}
