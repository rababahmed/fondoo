import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class CustomerAddressScalarWhereWithAggregatesInput {
    AND?: CustomerAddressScalarWhereWithAggregatesInput[] | undefined;
    OR?: CustomerAddressScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CustomerAddressScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    streetAddress?: StringWithAggregatesFilter | undefined;
    city?: StringWithAggregatesFilter | undefined;
    postCode?: StringWithAggregatesFilter | undefined;
    country?: StringWithAggregatesFilter | undefined;
    customerId?: IntNullableWithAggregatesFilter | undefined;
}
