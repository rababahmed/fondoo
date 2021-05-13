import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class CustomerScalarWhereWithAggregatesInput {
    AND?: CustomerScalarWhereWithAggregatesInput[] | undefined;
    OR?: CustomerScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CustomerScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    firstName?: StringWithAggregatesFilter | undefined;
    lastName?: StringWithAggregatesFilter | undefined;
    email?: StringWithAggregatesFilter | undefined;
    password?: StringWithAggregatesFilter | undefined;
    phone?: StringWithAggregatesFilter | undefined;
    restaurantId?: StringNullableWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
