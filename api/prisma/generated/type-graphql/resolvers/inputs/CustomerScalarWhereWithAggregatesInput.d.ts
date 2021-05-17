import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class CustomerScalarWhereWithAggregatesInput {
    AND?: CustomerScalarWhereWithAggregatesInput[] | undefined;
    OR?: CustomerScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CustomerScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    firstName?: StringWithAggregatesFilter | undefined;
    lastName?: StringWithAggregatesFilter | undefined;
    email?: StringWithAggregatesFilter | undefined;
    password?: StringWithAggregatesFilter | undefined;
    phone?: StringWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
