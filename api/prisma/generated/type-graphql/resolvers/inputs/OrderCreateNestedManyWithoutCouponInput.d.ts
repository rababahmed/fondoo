import { OrderCreateManyCouponInputEnvelope } from "../inputs/OrderCreateManyCouponInputEnvelope";
import { OrderCreateOrConnectWithoutCouponInput } from "../inputs/OrderCreateOrConnectWithoutCouponInput";
import { OrderCreateWithoutCouponInput } from "../inputs/OrderCreateWithoutCouponInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderCreateNestedManyWithoutCouponInput {
    create?: OrderCreateWithoutCouponInput[] | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutCouponInput[] | undefined;
    createMany?: OrderCreateManyCouponInputEnvelope | undefined;
    connect?: OrderWhereUniqueInput[] | undefined;
}
