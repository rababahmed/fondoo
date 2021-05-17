import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class CustomerAddressScalarWhereInput {
    AND?: CustomerAddressScalarWhereInput[] | undefined;
    OR?: CustomerAddressScalarWhereInput[] | undefined;
    NOT?: CustomerAddressScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    streetAddress?: StringFilter | undefined;
    city?: StringFilter | undefined;
    postCode?: StringFilter | undefined;
    country?: StringFilter | undefined;
    customerId?: StringNullableFilter | undefined;
}
