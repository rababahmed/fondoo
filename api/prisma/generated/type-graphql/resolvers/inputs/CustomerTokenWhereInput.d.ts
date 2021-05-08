import { CustomerRelationFilter } from "../inputs/CustomerRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class CustomerTokenWhereInput {
    AND?: CustomerTokenWhereInput[] | undefined;
    OR?: CustomerTokenWhereInput[] | undefined;
    NOT?: CustomerTokenWhereInput[] | undefined;
    id?: IntFilter | undefined;
    token?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    Customer?: CustomerRelationFilter | undefined;
    customerId?: IntNullableFilter | undefined;
}
