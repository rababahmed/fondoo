import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class CustomerAddressScalarWhereWithAggregatesInput {
    AND?: CustomerAddressScalarWhereWithAggregatesInput[] | undefined;
    OR?: CustomerAddressScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CustomerAddressScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    streetAddress?: StringWithAggregatesFilter | undefined;
    city?: StringWithAggregatesFilter | undefined;
    postCode?: StringWithAggregatesFilter | undefined;
    country?: StringWithAggregatesFilter | undefined;
    customerId?: StringNullableWithAggregatesFilter | undefined;
}
