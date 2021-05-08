import { OrderCreateNestedOneWithoutElementsInput } from "../inputs/OrderCreateNestedOneWithoutElementsInput";
export declare class OrderElementCreateWithoutCategoryInput {
    id?: string | undefined;
    code: string;
    name: string;
    description: string;
    image?: string | undefined;
    price: number;
    addonText?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    Order?: OrderCreateNestedOneWithoutElementsInput | undefined;
}
