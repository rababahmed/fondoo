import { GraphQLResolveInfo } from "graphql";
import { CreateManyProductArgs } from "./args/CreateManyProductArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyProductResolver {
    createManyProduct(ctx: any, info: GraphQLResolveInfo, args: CreateManyProductArgs): Promise<AffectedRowsOutput>;
}
