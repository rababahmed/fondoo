import { GraphQLResolveInfo } from "graphql";
import { AggregateUserTokenArgs } from "./args/AggregateUserTokenArgs";
import { CreateManyUserTokenArgs } from "./args/CreateManyUserTokenArgs";
import { CreateUserTokenArgs } from "./args/CreateUserTokenArgs";
import { DeleteManyUserTokenArgs } from "./args/DeleteManyUserTokenArgs";
import { DeleteUserTokenArgs } from "./args/DeleteUserTokenArgs";
import { FindFirstUserTokenArgs } from "./args/FindFirstUserTokenArgs";
import { FindManyUserTokenArgs } from "./args/FindManyUserTokenArgs";
import { FindUniqueUserTokenArgs } from "./args/FindUniqueUserTokenArgs";
import { GroupByUserTokenArgs } from "./args/GroupByUserTokenArgs";
import { UpdateManyUserTokenArgs } from "./args/UpdateManyUserTokenArgs";
import { UpdateUserTokenArgs } from "./args/UpdateUserTokenArgs";
import { UpsertUserTokenArgs } from "./args/UpsertUserTokenArgs";
import { UserToken } from "../../../models/UserToken";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateUserToken } from "../../outputs/AggregateUserToken";
import { UserTokenGroupBy } from "../../outputs/UserTokenGroupBy";
export declare class UserTokenCrudResolver {
    userToken(ctx: any, info: GraphQLResolveInfo, args: FindUniqueUserTokenArgs): Promise<UserToken | null>;
    findFirstUserToken(ctx: any, info: GraphQLResolveInfo, args: FindFirstUserTokenArgs): Promise<UserToken | null>;
    userTokens(ctx: any, info: GraphQLResolveInfo, args: FindManyUserTokenArgs): Promise<UserToken[]>;
    createUserToken(ctx: any, info: GraphQLResolveInfo, args: CreateUserTokenArgs): Promise<UserToken>;
    createManyUserToken(ctx: any, info: GraphQLResolveInfo, args: CreateManyUserTokenArgs): Promise<AffectedRowsOutput>;
    deleteUserToken(ctx: any, info: GraphQLResolveInfo, args: DeleteUserTokenArgs): Promise<UserToken | null>;
    updateUserToken(ctx: any, info: GraphQLResolveInfo, args: UpdateUserTokenArgs): Promise<UserToken | null>;
    deleteManyUserToken(ctx: any, info: GraphQLResolveInfo, args: DeleteManyUserTokenArgs): Promise<AffectedRowsOutput>;
    updateManyUserToken(ctx: any, info: GraphQLResolveInfo, args: UpdateManyUserTokenArgs): Promise<AffectedRowsOutput>;
    upsertUserToken(ctx: any, info: GraphQLResolveInfo, args: UpsertUserTokenArgs): Promise<UserToken>;
    aggregateUserToken(ctx: any, info: GraphQLResolveInfo, args: AggregateUserTokenArgs): Promise<AggregateUserToken>;
    groupByUserToken(ctx: any, info: GraphQLResolveInfo, args: GroupByUserTokenArgs): Promise<UserTokenGroupBy[]>;
}
