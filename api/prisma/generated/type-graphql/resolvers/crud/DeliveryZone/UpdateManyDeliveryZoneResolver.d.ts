import { GraphQLResolveInfo } from "graphql";
import { UpdateManyDeliveryZoneArgs } from "./args/UpdateManyDeliveryZoneArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyDeliveryZoneResolver {
    updateManyDeliveryZone(ctx: any, info: GraphQLResolveInfo, args: UpdateManyDeliveryZoneArgs): Promise<AffectedRowsOutput>;
}
