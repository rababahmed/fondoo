import { UserCreateOrConnectWithoutOrdersInput } from "../inputs/UserCreateOrConnectWithoutOrdersInput";
import { UserUncheckedCreateWithoutOrdersInput } from "../inputs/UserUncheckedCreateWithoutOrdersInput";
import { UserUncheckedUpdateWithoutOrdersInput } from "../inputs/UserUncheckedUpdateWithoutOrdersInput";
import { UserUpsertWithoutOrdersInput } from "../inputs/UserUpsertWithoutOrdersInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutOrdersInput {
    create?: UserUncheckedCreateWithoutOrdersInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput | undefined;
    upsert?: UserUpsertWithoutOrdersInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUncheckedUpdateWithoutOrdersInput | undefined;
}
