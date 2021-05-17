import { OrderCreateManyCouponInputEnvelope } from "../inputs/OrderCreateManyCouponInputEnvelope";
import { OrderCreateOrConnectWithoutCouponInput } from "../inputs/OrderCreateOrConnectWithoutCouponInput";
import { OrderCreateWithoutCouponInput } from "../inputs/OrderCreateWithoutCouponInput";
import { OrderScalarWhereInput } from "../inputs/OrderScalarWhereInput";
import { OrderUpdateManyWithWhereWithoutCouponInput } from "../inputs/OrderUpdateManyWithWhereWithoutCouponInput";
import { OrderUpdateWithWhereUniqueWithoutCouponInput } from "../inputs/OrderUpdateWithWhereUniqueWithoutCouponInput";
import { OrderUpsertWithWhereUniqueWithoutCouponInput } from "../inputs/OrderUpsertWithWhereUniqueWithoutCouponInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderUpdateManyWithoutCouponInput {
    create?: OrderCreateWithoutCouponInput[] | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutCouponInput[] | undefined;
    upsert?: OrderUpsertWithWhereUniqueWithoutCouponInput[] | undefined;
    createMany?: OrderCreateManyCouponInputEnvelope | undefined;
    connect?: OrderWhereUniqueInput[] | undefined;
    set?: OrderWhereUniqueInput[] | undefined;
    disconnect?: OrderWhereUniqueInput[] | undefined;
    delete?: OrderWhereUniqueInput[] | undefined;
    update?: OrderUpdateWithWhereUniqueWithoutCouponInput[] | undefined;
    updateMany?: OrderUpdateManyWithWhereWithoutCouponInput[] | undefined;
    deleteMany?: OrderScalarWhereInput[] | undefined;
}
