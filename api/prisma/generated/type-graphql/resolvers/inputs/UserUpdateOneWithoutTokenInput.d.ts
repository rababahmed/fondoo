import { UserCreateOrConnectWithoutTokenInput } from "../inputs/UserCreateOrConnectWithoutTokenInput";
import { UserUncheckedCreateWithoutTokenInput } from "../inputs/UserUncheckedCreateWithoutTokenInput";
import { UserUncheckedUpdateWithoutTokenInput } from "../inputs/UserUncheckedUpdateWithoutTokenInput";
import { UserUpsertWithoutTokenInput } from "../inputs/UserUpsertWithoutTokenInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneWithoutTokenInput {
    create?: UserUncheckedCreateWithoutTokenInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutTokenInput | undefined;
    upsert?: UserUpsertWithoutTokenInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: UserUncheckedUpdateWithoutTokenInput | undefined;
}
