import { GraphQLResolveInfo } from "graphql";
import { DeleteManyOrderElementArgs } from "./args/DeleteManyOrderElementArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyOrderElementResolver {
    deleteManyOrderElement(ctx: any, info: GraphQLResolveInfo, args: DeleteManyOrderElementArgs): Promise<AffectedRowsOutput>;
}
