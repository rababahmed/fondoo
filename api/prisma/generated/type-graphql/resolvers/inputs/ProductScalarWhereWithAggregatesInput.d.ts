import { BoolNullableWithAggregatesFilter } from "../inputs/BoolNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumSpiceLevelWithAggregatesFilter } from "../inputs/EnumSpiceLevelWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ProductScalarWhereWithAggregatesInput {
    AND?: ProductScalarWhereWithAggregatesInput[] | undefined;
    OR?: ProductScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ProductScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    image?: StringNullableWithAggregatesFilter | undefined;
    price?: IntNullableWithAggregatesFilter | undefined;
    spiceLevel?: EnumSpiceLevelWithAggregatesFilter | undefined;
    isPopular?: BoolNullableWithAggregatesFilter | undefined;
    isActive?: BoolNullableWithAggregatesFilter | undefined;
    productCategoryId?: StringNullableWithAggregatesFilter | undefined;
    restaurantId?: StringNullableWithAggregatesFilter | undefined;
}
