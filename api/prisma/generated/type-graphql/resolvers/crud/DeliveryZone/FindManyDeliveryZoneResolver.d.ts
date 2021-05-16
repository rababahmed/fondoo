import { GraphQLResolveInfo } from "graphql";
import { FindManyDeliveryZoneArgs } from "./args/FindManyDeliveryZoneArgs";
import { DeliveryZone } from "../../../models/DeliveryZone";
export declare class FindManyDeliveryZoneResolver {
    findManyDeliveryZone(ctx: any, info: GraphQLResolveInfo, args: FindManyDeliveryZoneArgs): Promise<DeliveryZone[]>;
}
