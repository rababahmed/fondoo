import { User } from "../../../models/User";
import { UserToken } from "../../../models/UserToken";
export declare class UserTokenRelationsResolver {
    User(userToken: UserToken, ctx: any): Promise<User | null>;
}
