export declare class OrderItemCreateManyProductInput {
    id?: string | undefined;
    quantity?: number | undefined;
    total: number;
    spiceLevel?: "None" | "Mild" | "Medium" | "Hot" | "ExtraHot" | undefined;
    orderId?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    restaurantId?: string | undefined;
}
