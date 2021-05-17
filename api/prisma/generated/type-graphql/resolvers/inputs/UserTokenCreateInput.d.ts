import { UserCreateNestedOneWithoutTokenInput } from "../inputs/UserCreateNestedOneWithoutTokenInput";
export declare class UserTokenCreateInput {
    id?: string | undefined;
    token: string;
    provider?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    User?: UserCreateNestedOneWithoutTokenInput | undefined;
}
