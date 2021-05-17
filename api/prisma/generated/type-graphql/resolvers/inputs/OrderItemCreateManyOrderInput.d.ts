export declare class OrderItemCreateManyOrderInput {
    id?: string | undefined;
    quantity?: number | undefined;
    total: number;
    spiceLevel?: "None" | "Mild" | "Medium" | "Hot" | "ExtraHot" | undefined;
    productId: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    restaurantId?: string | undefined;
}
