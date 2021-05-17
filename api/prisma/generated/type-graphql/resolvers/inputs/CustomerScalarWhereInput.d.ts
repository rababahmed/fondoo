import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class CustomerScalarWhereInput {
    AND?: CustomerScalarWhereInput[] | undefined;
    OR?: CustomerScalarWhereInput[] | undefined;
    NOT?: CustomerScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    firstName?: StringFilter | undefined;
    lastName?: StringFilter | undefined;
    email?: StringFilter | undefined;
    password?: StringFilter | undefined;
    phone?: StringFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
