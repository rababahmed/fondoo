import { GraphQLResolveInfo } from "graphql";
import { UpdateManyProductArgs } from "./args/UpdateManyProductArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyProductResolver {
    updateManyProduct(ctx: any, info: GraphQLResolveInfo, args: UpdateManyProductArgs): Promise<AffectedRowsOutput>;
}
