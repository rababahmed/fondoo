import { CustomerRelationFilter } from "../inputs/CustomerRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class CustomerTokenWhereInput {
    AND?: CustomerTokenWhereInput[] | undefined;
    OR?: CustomerTokenWhereInput[] | undefined;
    NOT?: CustomerTokenWhereInput[] | undefined;
    id?: StringFilter | undefined;
    token?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    Customer?: CustomerRelationFilter | undefined;
    customerId?: StringNullableFilter | undefined;
}
