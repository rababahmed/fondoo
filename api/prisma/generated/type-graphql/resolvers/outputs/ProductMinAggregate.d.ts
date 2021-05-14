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
    productCategoryId: string | null;
    restaurantId: string | null;
}
