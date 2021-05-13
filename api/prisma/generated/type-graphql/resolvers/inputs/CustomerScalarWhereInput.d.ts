import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class CustomerScalarWhereInput {
    AND?: CustomerScalarWhereInput[] | undefined;
    OR?: CustomerScalarWhereInput[] | undefined;
    NOT?: CustomerScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    firstName?: StringFilter | undefined;
    lastName?: StringFilter | undefined;
    email?: StringFilter | undefined;
    password?: StringFilter | undefined;
    phone?: StringFilter | undefined;
    restaurantId?: StringNullableFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
