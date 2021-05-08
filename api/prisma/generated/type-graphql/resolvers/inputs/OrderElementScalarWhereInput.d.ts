import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class OrderElementScalarWhereInput {
    AND?: OrderElementScalarWhereInput[] | undefined;
    OR?: OrderElementScalarWhereInput[] | undefined;
    NOT?: OrderElementScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    code?: StringFilter | undefined;
    name?: StringFilter | undefined;
    description?: StringFilter | undefined;
    image?: StringNullableFilter | undefined;
    price?: IntFilter | undefined;
    addonText?: StringNullableFilter | undefined;
    orderId?: IntNullableFilter | undefined;
    productCategoryId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
