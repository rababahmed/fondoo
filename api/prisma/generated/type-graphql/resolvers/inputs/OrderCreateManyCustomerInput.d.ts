export declare class OrderCreateManyCustomerInput {
    id?: number | undefined;
    address?: string | undefined;
    discount: number;
    deliveryCharges: number;
    vat: number;
    serviceCharge: number;
    total: number;
    isAccepted: boolean;
    couponId?: string | undefined;
    restaurantId: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
