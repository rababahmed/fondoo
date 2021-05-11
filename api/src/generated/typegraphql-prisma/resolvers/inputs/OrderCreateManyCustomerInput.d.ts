import { Prisma } from "@prisma/client";
export declare class OrderCreateManyCustomerInput {
    id?: number | undefined;
    items: Prisma.InputJsonValue;
    coupon?: string | undefined;
    deliveryCharges: number;
    vat: number;
    serviceCharge: number;
    total: number;
    isAccepted: boolean;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    userId: number;
    restaurantId: string;
    customerAddressId?: number | undefined;
}
