import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { OrderRelationFilter } from "../inputs/OrderRelationFilter";
import { ProductCategoryRelationFilter } from "../inputs/ProductCategoryRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class OrderElementWhereInput {
    AND?: OrderElementWhereInput[] | undefined;
    OR?: OrderElementWhereInput[] | undefined;
    NOT?: OrderElementWhereInput[] | undefined;
    id?: StringFilter | undefined;
    code?: StringFilter | undefined;
    name?: StringFilter | undefined;
    description?: StringFilter | undefined;
    image?: StringNullableFilter | undefined;
    price?: IntFilter | undefined;
    category?: ProductCategoryRelationFilter | undefined;
    addonText?: StringNullableFilter | undefined;
    Order?: OrderRelationFilter | undefined;
    orderId?: IntNullableFilter | undefined;
    productCategoryId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
