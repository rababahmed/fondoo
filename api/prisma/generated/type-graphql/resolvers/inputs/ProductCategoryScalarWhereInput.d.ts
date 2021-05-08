import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ProductCategoryScalarWhereInput {
    AND?: ProductCategoryScalarWhereInput[] | undefined;
    OR?: ProductCategoryScalarWhereInput[] | undefined;
    NOT?: ProductCategoryScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    name?: StringFilter | undefined;
    description?: StringNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    isActive?: BoolNullableFilter | undefined;
    isFeatured?: BoolNullableFilter | undefined;
    restaurantId?: StringFilter | undefined;
}
