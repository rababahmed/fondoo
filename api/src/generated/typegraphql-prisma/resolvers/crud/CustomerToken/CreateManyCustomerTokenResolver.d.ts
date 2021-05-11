import { GraphQLResolveInfo } from "graphql";
import { CreateManyCustomerTokenArgs } from "./args/CreateManyCustomerTokenArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyCustomerTokenResolver {
    createManyCustomerToken(ctx: any, info: GraphQLResolveInfo, args: CreateManyCustomerTokenArgs): Promise<AffectedRowsOutput>;
}
