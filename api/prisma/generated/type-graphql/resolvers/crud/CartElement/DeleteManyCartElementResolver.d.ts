import { GraphQLResolveInfo } from "graphql";
import { DeleteManyCartElementArgs } from "./args/DeleteManyCartElementArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyCartElementResolver {
    deleteManyCartElement(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCartElementArgs): Promise<AffectedRowsOutput>;
}
