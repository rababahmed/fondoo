import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumSpiceLevelFilter } from "../inputs/EnumSpiceLevelFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { ProductCategoryRelationFilter } from "../inputs/ProductCategoryRelationFilter";
import { RestaurantRelationFilter } from "../inputs/RestaurantRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ProductWhereInput {
    AND?: ProductWhereInput[] | undefined;
    OR?: ProductWhereInput[] | undefined;
    NOT?: ProductWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    name?: StringFilter | undefined;
    description?: StringNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    price?: IntNullableFilter | undefined;
    spiceLevel?: EnumSpiceLevelFilter | undefined;
    isPopular?: BoolNullableFilter | undefined;
    isActive?: BoolNullableFilter | undefined;
    ProductCategory?: ProductCategoryRelationFilter | undefined;
    productCategoryId?: StringNullableFilter | undefined;
    Restaurant?: RestaurantRelationFilter | undefined;
    restaurantId?: StringNullableFilter | undefined;
}
