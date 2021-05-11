import { BoolNullableWithAggregatesFilter } from "../inputs/BoolNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ProductCategoryScalarWhereWithAggregatesInput {
    AND?: ProductCategoryScalarWhereWithAggregatesInput[] | undefined;
    OR?: ProductCategoryScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ProductCategoryScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    image?: StringNullableWithAggregatesFilter | undefined;
    isActive?: BoolNullableWithAggregatesFilter | undefined;
    isFeatured?: BoolNullableWithAggregatesFilter | undefined;
    restaurantId?: StringWithAggregatesFilter | undefined;
}
