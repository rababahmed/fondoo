export declare class ProductCreateManyRestaurantInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    name: string;
    description?: string | undefined;
    image?: string | undefined;
    price?: number | undefined;
    spiceLevel?: "None" | "Mild" | "Medium" | "Hot" | "ExtraHot" | undefined;
    isPopular?: boolean | undefined;
    isActive?: boolean | undefined;
    orderId?: number | undefined;
    productCategoryId: string;
}
