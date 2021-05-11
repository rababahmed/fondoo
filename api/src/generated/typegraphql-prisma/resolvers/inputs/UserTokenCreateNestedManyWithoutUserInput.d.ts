import { UserTokenCreateManyUserInputEnvelope } from "../inputs/UserTokenCreateManyUserInputEnvelope";
import { UserTokenCreateOrConnectWithoutUserInput } from "../inputs/UserTokenCreateOrConnectWithoutUserInput";
import { UserTokenCreateWithoutUserInput } from "../inputs/UserTokenCreateWithoutUserInput";
import { UserTokenWhereUniqueInput } from "../inputs/UserTokenWhereUniqueInput";
export declare class UserTokenCreateNestedManyWithoutUserInput {
    create?: UserTokenCreateWithoutUserInput[] | undefined;
    connectOrCreate?: UserTokenCreateOrConnectWithoutUserInput[] | undefined;
    createMany?: UserTokenCreateManyUserInputEnvelope | undefined;
    connect?: UserTokenWhereUniqueInput[] | undefined;
}
