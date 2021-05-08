import { UserCreateNestedOneWithoutTokenInput } from "../inputs/UserCreateNestedOneWithoutTokenInput";
export declare class UserTokenCreateInput {
    token: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    User?: UserCreateNestedOneWithoutTokenInput | undefined;
}
