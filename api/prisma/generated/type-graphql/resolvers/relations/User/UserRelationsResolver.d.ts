import { Restaurant } from "../../../models/Restaurant";
import { User } from "../../../models/User";
import { UserToken } from "../../../models/UserToken";
import { UserRestaurantsArgs } from "./args/UserRestaurantsArgs";
import { UserTokenArgs } from "./args/UserTokenArgs";
export declare class UserRelationsResolver {
    token(user: User, ctx: any, args: UserTokenArgs): Promise<UserToken[]>;
    restaurants(user: User, ctx: any, args: UserRestaurantsArgs): Promise<Restaurant[]>;
}
