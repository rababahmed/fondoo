import { UserCreateOrConnectWithoutTokenInput } from "../inputs/UserCreateOrConnectWithoutTokenInput";
import { UserCreateWithoutTokenInput } from "../inputs/UserCreateWithoutTokenInput";
import { UserUpdateWithoutTokenInput } from "../inputs/UserUpdateWithoutTokenInput";
import { UserUpsertWithoutTokenInput } from "../inputs/UserUpsertWithoutTokenInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneWithoutTokenInput {
    create?: UserCreateWithoutTokenInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutTokenInput | undefined;
    upsert?: UserUpsertWithoutTokenInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: UserUpdateWithoutTokenInput | undefined;
}
