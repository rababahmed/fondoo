export declare class OrderCreateManyInput {
    id?: number | undefined;
    charges?: number | undefined;
    total?: number | undefined;
    isAccepted?: boolean | undefined;
    restaurantId?: string | undefined;
    customerId?: number | undefined;
    customerAddressId: number;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
