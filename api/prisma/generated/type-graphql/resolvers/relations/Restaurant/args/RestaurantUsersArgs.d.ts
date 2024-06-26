import { UserOrderByInput } from "../../../inputs/UserOrderByInput";
import { UserWhereInput } from "../../../inputs/UserWhereInput";
import { UserWhereUniqueInput } from "../../../inputs/UserWhereUniqueInput";
export declare class RestaurantUsersArgs {
    where?: UserWhereInput | undefined;
    orderBy?: UserOrderByInput[] | undefined;
    cursor?: UserWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "createdAt" | "firstName" | "lastName" | "email" | "password" | "phone" | "role"> | undefined;
}
