import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { CustomerAddressRelationFilter } from "../inputs/CustomerAddressRelationFilter";
import { CustomerRelationFilter } from "../inputs/CustomerRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { OrderElementListRelationFilter } from "../inputs/OrderElementListRelationFilter";
import { ProductListRelationFilter } from "../inputs/ProductListRelationFilter";
import { RestaurantRelationFilter } from "../inputs/RestaurantRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class OrderWhereInput {
    AND?: OrderWhereInput[] | undefined;
    OR?: OrderWhereInput[] | undefined;
    NOT?: OrderWhereInput[] | undefined;
    id?: IntFilter | undefined;
    elements?: OrderElementListRelationFilter | undefined;
    charges?: IntNullableFilter | undefined;
    total?: IntNullableFilter | undefined;
    isAccepted?: BoolNullableFilter | undefined;
    customerAddress?: CustomerAddressRelationFilter | undefined;
    restaurant?: RestaurantRelationFilter | undefined;
    restaurantId?: StringNullableFilter | undefined;
    customer?: CustomerRelationFilter | undefined;
    customerId?: IntNullableFilter | undefined;
    product?: ProductListRelationFilter | undefined;
    customerAddressId?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
