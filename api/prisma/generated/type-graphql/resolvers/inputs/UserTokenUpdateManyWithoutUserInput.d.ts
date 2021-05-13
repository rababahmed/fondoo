import { UserTokenCreateManyUserInputEnvelope } from "../inputs/UserTokenCreateManyUserInputEnvelope";
import { UserTokenCreateOrConnectWithoutUserInput } from "../inputs/UserTokenCreateOrConnectWithoutUserInput";
import { UserTokenCreateWithoutUserInput } from "../inputs/UserTokenCreateWithoutUserInput";
import { UserTokenScalarWhereInput } from "../inputs/UserTokenScalarWhereInput";
import { UserTokenUpdateManyWithWhereWithoutUserInput } from "../inputs/UserTokenUpdateManyWithWhereWithoutUserInput";
import { UserTokenUpdateWithWhereUniqueWithoutUserInput } from "../inputs/UserTokenUpdateWithWhereUniqueWithoutUserInput";
import { UserTokenUpsertWithWhereUniqueWithoutUserInput } from "../inputs/UserTokenUpsertWithWhereUniqueWithoutUserInput";
import { UserTokenWhereUniqueInput } from "../inputs/UserTokenWhereUniqueInput";
export declare class UserTokenUpdateManyWithoutUserInput {
    create?: UserTokenCreateWithoutUserInput[] | undefined;
    connectOrCreate?: UserTokenCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: UserTokenUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    createMany?: UserTokenCreateManyUserInputEnvelope | undefined;
    connect?: UserTokenWhereUniqueInput[] | undefined;
    set?: UserTokenWhereUniqueInput[] | undefined;
    disconnect?: UserTokenWhereUniqueInput[] | undefined;
    delete?: UserTokenWhereUniqueInput[] | undefined;
    update?: UserTokenUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: UserTokenUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: UserTokenScalarWhereInput[] | undefined;
}
