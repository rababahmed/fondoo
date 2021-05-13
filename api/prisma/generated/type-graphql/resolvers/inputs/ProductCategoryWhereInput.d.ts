import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ProductListRelationFilter } from "../inputs/ProductListRelationFilter";
import { RestaurantRelationFilter } from "../inputs/RestaurantRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ProductCategoryWhereInput {
    AND?: ProductCategoryWhereInput[] | undefined;
    OR?: ProductCategoryWhereInput[] | undefined;
    NOT?: ProductCategoryWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    name?: StringFilter | undefined;
    description?: StringNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    isActive?: BoolNullableFilter | undefined;
    isFeatured?: BoolNullableFilter | undefined;
    restaurants?: RestaurantRelationFilter | undefined;
    restaurantId?: StringFilter | undefined;
    Product?: ProductListRelationFilter | undefined;
}
