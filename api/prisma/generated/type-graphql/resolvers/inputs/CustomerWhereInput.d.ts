import { CartElementListRelationFilter } from "../inputs/CartElementListRelationFilter";
import { CustomerAddressListRelationFilter } from "../inputs/CustomerAddressListRelationFilter";
import { CustomerTokenListRelationFilter } from "../inputs/CustomerTokenListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { OrderListRelationFilter } from "../inputs/OrderListRelationFilter";
import { RestaurantRelationFilter } from "../inputs/RestaurantRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class CustomerWhereInput {
    AND?: CustomerWhereInput[] | undefined;
    OR?: CustomerWhereInput[] | undefined;
    NOT?: CustomerWhereInput[] | undefined;
    id?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    firstName?: StringFilter | undefined;
    lastName?: StringFilter | undefined;
    email?: StringFilter | undefined;
    password?: StringFilter | undefined;
    phone?: StringFilter | undefined;
    token?: CustomerTokenListRelationFilter | undefined;
    address?: CustomerAddressListRelationFilter | undefined;
    orders?: OrderListRelationFilter | undefined;
    cart?: CartElementListRelationFilter | undefined;
    Restaurant?: RestaurantRelationFilter | undefined;
    restaurantId?: StringNullableFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
