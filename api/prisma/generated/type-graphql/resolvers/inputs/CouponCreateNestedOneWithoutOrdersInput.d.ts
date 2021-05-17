import { CouponCreateOrConnectWithoutOrdersInput } from "../inputs/CouponCreateOrConnectWithoutOrdersInput";
import { CouponCreateWithoutOrdersInput } from "../inputs/CouponCreateWithoutOrdersInput";
import { CouponWhereUniqueInput } from "../inputs/CouponWhereUniqueInput";
export declare class CouponCreateNestedOneWithoutOrdersInput {
    create?: CouponCreateWithoutOrdersInput | undefined;
    connectOrCreate?: CouponCreateOrConnectWithoutOrdersInput | undefined;
    connect?: CouponWhereUniqueInput | undefined;
}
