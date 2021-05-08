import { ProductCategoryCreateNestedOneWithoutOrderElementInput } from "../inputs/ProductCategoryCreateNestedOneWithoutOrderElementInput";
export declare class OrderElementCreateWithoutOrderInput {
    id?: string | undefined;
    code: string;
    name: string;
    description: string;
    image?: string | undefined;
    price: number;
    addonText?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    category: ProductCategoryCreateNestedOneWithoutOrderElementInput;
}
