import { Prisma } from "@prisma/client";
export declare class OrderUncheckedCreateWithoutUserInput {
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
    restaurantId: string;
    customerId?: number | undefined;
    customerAddressId?: number | undefined;
}
