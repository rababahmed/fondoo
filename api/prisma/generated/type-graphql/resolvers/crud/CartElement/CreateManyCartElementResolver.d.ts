import { GraphQLResolveInfo } from "graphql";
import { CreateManyCartElementArgs } from "./args/CreateManyCartElementArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyCartElementResolver {
    createManyCartElement(ctx: any, info: GraphQLResolveInfo, args: CreateManyCartElementArgs): Promise<AffectedRowsOutput>;
}
