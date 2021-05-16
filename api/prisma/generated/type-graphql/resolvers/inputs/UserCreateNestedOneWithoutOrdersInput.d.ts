import { UserCreateOrConnectWithoutOrdersInput } from "../inputs/UserCreateOrConnectWithoutOrdersInput";
import { UserCreateWithoutOrdersInput } from "../inputs/UserCreateWithoutOrdersInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutOrdersInput {
    create?: UserCreateWithoutOrdersInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
