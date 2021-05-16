import { UserCreateOrConnectWithoutTokenInput } from "../inputs/UserCreateOrConnectWithoutTokenInput";
import { UserUncheckedCreateWithoutTokenInput } from "../inputs/UserUncheckedCreateWithoutTokenInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutTokenInput {
    create?: UserUncheckedCreateWithoutTokenInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutTokenInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
