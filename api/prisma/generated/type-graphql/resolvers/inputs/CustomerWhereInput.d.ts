import { CustomerAddressListRelationFilter } from "../inputs/CustomerAddressListRelationFilter";
import { CustomerTokenListRelationFilter } from "../inputs/CustomerTokenListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { OrderListRelationFilter } from "../inputs/OrderListRelationFilter";
import { RestaurantListRelationFilter } from "../inputs/RestaurantListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class CustomerWhereInput {
    AND?: CustomerWhereInput[] | undefined;
    OR?: CustomerWhereInput[] | undefined;
    NOT?: CustomerWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    firstName?: StringFilter | undefined;
    lastName?: StringFilter | undefined;
    email?: StringFilter | undefined;
    password?: StringFilter | undefined;
    phone?: StringFilter | undefined;
    token?: CustomerTokenListRelationFilter | undefined;
    addresses?: CustomerAddressListRelationFilter | undefined;
    orders?: OrderListRelationFilter | undefined;
    restaurants?: RestaurantListRelationFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
