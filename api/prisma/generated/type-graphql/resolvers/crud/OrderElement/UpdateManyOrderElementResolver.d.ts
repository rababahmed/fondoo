import { GraphQLResolveInfo } from "graphql";
import { UpdateManyOrderElementArgs } from "./args/UpdateManyOrderElementArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyOrderElementResolver {
    updateManyOrderElement(ctx: any, info: GraphQLResolveInfo, args: UpdateManyOrderElementArgs): Promise<AffectedRowsOutput>;
}
