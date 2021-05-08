import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class CartElementScalarWhereInput {
    AND?: CartElementScalarWhereInput[] | undefined;
    OR?: CartElementScalarWhereInput[] | undefined;
    NOT?: CartElementScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    quantity?: IntFilter | undefined;
    customerId?: IntFilter | undefined;
    productId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
