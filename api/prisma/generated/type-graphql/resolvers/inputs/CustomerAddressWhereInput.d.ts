import { CustomerRelationFilter } from "../inputs/CustomerRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class CustomerAddressWhereInput {
    AND?: CustomerAddressWhereInput[] | undefined;
    OR?: CustomerAddressWhereInput[] | undefined;
    NOT?: CustomerAddressWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    streetAddress?: StringFilter | undefined;
    city?: StringFilter | undefined;
    postCode?: StringFilter | undefined;
    country?: StringFilter | undefined;
    Customer?: CustomerRelationFilter | undefined;
    customerId?: StringNullableFilter | undefined;
}
