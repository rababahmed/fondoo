import { CustomerRelationFilter } from "../inputs/CustomerRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ProductRelationFilter } from "../inputs/ProductRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class CartElementWhereInput {
    AND?: CartElementWhereInput[] | undefined;
    OR?: CartElementWhereInput[] | undefined;
    NOT?: CartElementWhereInput[] | undefined;
    id?: StringFilter | undefined;
    quantity?: IntFilter | undefined;
    product?: ProductRelationFilter | undefined;
    customer?: CustomerRelationFilter | undefined;
    customerId?: IntFilter | undefined;
    productId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
