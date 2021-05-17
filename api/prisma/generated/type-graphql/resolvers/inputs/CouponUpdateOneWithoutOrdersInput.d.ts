import { CouponCreateOrConnectWithoutOrdersInput } from "../inputs/CouponCreateOrConnectWithoutOrdersInput";
import { CouponCreateWithoutOrdersInput } from "../inputs/CouponCreateWithoutOrdersInput";
import { CouponUpdateWithoutOrdersInput } from "../inputs/CouponUpdateWithoutOrdersInput";
import { CouponUpsertWithoutOrdersInput } from "../inputs/CouponUpsertWithoutOrdersInput";
import { CouponWhereUniqueInput } from "../inputs/CouponWhereUniqueInput";
export declare class CouponUpdateOneWithoutOrdersInput {
    create?: CouponCreateWithoutOrdersInput | undefined;
    connectOrCreate?: CouponCreateOrConnectWithoutOrdersInput | undefined;
    upsert?: CouponUpsertWithoutOrdersInput | undefined;
    connect?: CouponWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: CouponUpdateWithoutOrdersInput | undefined;
}
