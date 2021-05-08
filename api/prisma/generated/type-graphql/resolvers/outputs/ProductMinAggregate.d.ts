export declare class ProductMinAggregate {
    id: string | null;
    createdAt: Date | null;
    name: string | null;
    description: string | null;
    image: string | null;
    price: number | null;
    spiceLevel: "None" | "Mild" | "Medium" | "Hot" | "ExtraHot" | null;
    isPopular: boolean | null;
    isActive: boolean | null;
    restaurantId: string | null;
    orderId: number | null;
    productCategoryId: string | null;
}
