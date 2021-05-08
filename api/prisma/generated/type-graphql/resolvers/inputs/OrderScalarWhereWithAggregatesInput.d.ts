import { BoolNullableWithAggregatesFilter } from "../inputs/BoolNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class OrderScalarWhereWithAggregatesInput {
    AND?: OrderScalarWhereWithAggregatesInput[] | undefined;
    OR?: OrderScalarWhereWithAggregatesInput[] | undefined;
    NOT?: OrderScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    charges?: IntNullableWithAggregatesFilter | undefined;
    total?: IntNullableWithAggregatesFilter | undefined;
    isAccepted?: BoolNullableWithAggregatesFilter | undefined;
    restaurantId?: StringNullableWithAggregatesFilter | undefined;
    customerId?: IntNullableWithAggregatesFilter | undefined;
    customerAddressId?: IntWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
