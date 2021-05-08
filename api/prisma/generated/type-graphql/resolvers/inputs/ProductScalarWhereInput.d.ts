import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumSpiceLevelFilter } from "../inputs/EnumSpiceLevelFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ProductScalarWhereInput {
    AND?: ProductScalarWhereInput[] | undefined;
    OR?: ProductScalarWhereInput[] | undefined;
    NOT?: ProductScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    name?: StringFilter | undefined;
    description?: StringNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    price?: IntNullableFilter | undefined;
    spiceLevel?: EnumSpiceLevelFilter | undefined;
    isPopular?: BoolNullableFilter | undefined;
    isActive?: BoolNullableFilter | undefined;
    restaurantId?: StringNullableFilter | undefined;
    orderId?: IntNullableFilter | undefined;
    productCategoryId?: StringFilter | undefined;
}
