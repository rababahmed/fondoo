import { GraphQLResolveInfo } from "graphql";
import { DeleteManyDeliveryZoneArgs } from "./args/DeleteManyDeliveryZoneArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyDeliveryZoneResolver {
    deleteManyDeliveryZone(ctx: any, info: GraphQLResolveInfo, args: DeleteManyDeliveryZoneArgs): Promise<AffectedRowsOutput>;
}
