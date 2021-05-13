import { CustomerRelationFilter } from "../inputs/CustomerRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { OrderListRelationFilter } from "../inputs/OrderListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class CustomerAddressWhereInput {
    AND?: CustomerAddressWhereInput[] | undefined;
    OR?: CustomerAddressWhereInput[] | undefined;
    NOT?: CustomerAddressWhereInput[] | undefined;
    id?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    streetAddress?: StringFilter | undefined;
    city?: StringFilter | undefined;
    postCode?: StringFilter | undefined;
    country?: StringFilter | undefined;
    Customer?: CustomerRelationFilter | undefined;
    customerId?: IntNullableFilter | undefined;
    Order?: OrderListRelationFilter | undefined;
}
