import { UserCreateOrConnectWithoutOrdersInput } from "../inputs/UserCreateOrConnectWithoutOrdersInput";
import { UserCreateWithoutOrdersInput } from "../inputs/UserCreateWithoutOrdersInput";
import { UserUpdateWithoutOrdersInput } from "../inputs/UserUpdateWithoutOrdersInput";
import { UserUpsertWithoutOrdersInput } from "../inputs/UserUpsertWithoutOrdersInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutOrdersInput {
    create?: UserCreateWithoutOrdersInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput | undefined;
    upsert?: UserUpsertWithoutOrdersInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutOrdersInput | undefined;
}
