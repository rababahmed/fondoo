import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class CustomerAddressScalarWhereInput {
    AND?: CustomerAddressScalarWhereInput[] | undefined;
    OR?: CustomerAddressScalarWhereInput[] | undefined;
    NOT?: CustomerAddressScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    streetAddress?: StringFilter | undefined;
    city?: StringFilter | undefined;
    postCode?: StringFilter | undefined;
    country?: StringFilter | undefined;
    customerId?: IntNullableFilter | undefined;
}
