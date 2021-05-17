export declare class OrderCreateManyCouponInput {
    id?: number | undefined;
    address?: string | undefined;
    discount: number;
    deliveryCharges: number;
    vat: number;
    serviceCharge: number;
    total: number;
    isAccepted: boolean;
    restaurantId: string;
    customerId?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
