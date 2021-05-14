import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class CustomerTokenScalarWhereInput {
    AND?: CustomerTokenScalarWhereInput[] | undefined;
    OR?: CustomerTokenScalarWhereInput[] | undefined;
    NOT?: CustomerTokenScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    token?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    customerId?: IntNullableFilter | undefined;
}
