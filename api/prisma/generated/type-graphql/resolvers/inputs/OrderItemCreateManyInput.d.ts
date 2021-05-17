export declare class OrderItemCreateManyInput {
    id?: string | undefined;
    quantity?: number | undefined;
    total: number;
    spiceLevel?: "None" | "Mild" | "Medium" | "Hot" | "ExtraHot" | undefined;
    productId: string;
    orderId?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    restaurantId?: string | undefined;
}
