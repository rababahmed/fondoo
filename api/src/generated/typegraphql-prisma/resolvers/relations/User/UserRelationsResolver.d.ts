import { Order } from "../../../models/Order";
import { Restaurant } from "../../../models/Restaurant";
import { User } from "../../../models/User";
import { UserToken } from "../../../models/UserToken";
import { UserOrdersArgs } from "./args/UserOrdersArgs";
import { UserTokenArgs } from "./args/UserTokenArgs";
export declare class UserRelationsResolver {
    token(user: User, ctx: any, args: UserTokenArgs): Promise<UserToken[]>;
    Restaurant(user: User, ctx: any): Promise<Restaurant | null>;
    orders(user: User, ctx: any, args: UserOrdersArgs): Promise<Order[]>;
}
