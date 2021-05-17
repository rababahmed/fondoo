export declare class CouponCreateManyInput {
    id?: string | undefined;
    code: string;
    discount: "Fixed" | "Percent";
    value: number;
    description?: string | undefined;
}
