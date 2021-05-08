import { GraphQLResolveInfo } from "graphql";
import { UpdateManyCartElementArgs } from "./args/UpdateManyCartElementArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyCartElementResolver {
    updateManyCartElement(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCartElementArgs): Promise<AffectedRowsOutput>;
}
