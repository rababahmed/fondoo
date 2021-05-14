import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { JsonFilter } from "../inputs/JsonFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class OrderScalarWhereInput {
    AND?: OrderScalarWhereInput[] | undefined;
    OR?: OrderScalarWhereInput[] | undefined;
    NOT?: OrderScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    items?: JsonFilter | undefined;
    coupon?: StringNullableFilter | undefined;
    deliveryCharges?: FloatFilter | undefined;
    vat?: FloatFilter | undefined;
    serviceCharge?: FloatFilter | undefined;
    total?: FloatFilter | undefined;
    isAccepted?: BoolFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    userId?: IntFilter | undefined;
    restaurantId?: StringFilter | undefined;
    customerId?: IntNullableFilter | undefined;
    customerAddressId?: IntNullableFilter | undefined;
}
