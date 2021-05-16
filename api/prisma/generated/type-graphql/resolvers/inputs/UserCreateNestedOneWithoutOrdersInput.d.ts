import { UserCreateOrConnectWithoutOrdersInput } from "../inputs/UserCreateOrConnectWithoutOrdersInput";
import { UserUncheckedCreateWithoutOrdersInput } from "../inputs/UserUncheckedCreateWithoutOrdersInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutOrdersInput {
    create?: UserUncheckedCreateWithoutOrdersInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
