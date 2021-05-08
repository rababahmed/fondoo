import { GraphQLResolveInfo } from "graphql";
import { CreateManyOrderElementArgs } from "./args/CreateManyOrderElementArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyOrderElementResolver {
    createManyOrderElement(ctx: any, info: GraphQLResolveInfo, args: CreateManyOrderElementArgs): Promise<AffectedRowsOutput>;
}
