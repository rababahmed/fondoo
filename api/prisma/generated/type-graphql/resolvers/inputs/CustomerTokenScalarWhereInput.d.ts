import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class CustomerTokenScalarWhereInput {
    AND?: CustomerTokenScalarWhereInput[] | undefined;
    OR?: CustomerTokenScalarWhereInput[] | undefined;
    NOT?: CustomerTokenScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    token?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    customerId?: StringNullableFilter | undefined;
}
