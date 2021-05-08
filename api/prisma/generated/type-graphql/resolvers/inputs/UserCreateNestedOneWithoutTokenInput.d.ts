import { UserCreateOrConnectWithoutTokenInput } from "../inputs/UserCreateOrConnectWithoutTokenInput";
import { UserCreateWithoutTokenInput } from "../inputs/UserCreateWithoutTokenInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutTokenInput {
    create?: UserCreateWithoutTokenInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutTokenInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
