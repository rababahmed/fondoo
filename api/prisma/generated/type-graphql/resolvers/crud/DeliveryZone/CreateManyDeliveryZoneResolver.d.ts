import { GraphQLResolveInfo } from "graphql";
import { CreateManyDeliveryZoneArgs } from "./args/CreateManyDeliveryZoneArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyDeliveryZoneResolver {
    createManyDeliveryZone(ctx: any, info: GraphQLResolveInfo, args: CreateManyDeliveryZoneArgs): Promise<AffectedRowsOutput>;
}
