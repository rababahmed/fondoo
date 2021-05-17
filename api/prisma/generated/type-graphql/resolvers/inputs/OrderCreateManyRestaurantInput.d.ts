export declare class OrderCreateManyRestaurantInput {
    id?: number | undefined;
    address?: string | undefined;
    discount: number;
    deliveryCharges: number;
    vat: number;
    serviceCharge: number;
    total: number;
    isAccepted: boolean;
    couponId?: string | undefined;
    customerId?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
