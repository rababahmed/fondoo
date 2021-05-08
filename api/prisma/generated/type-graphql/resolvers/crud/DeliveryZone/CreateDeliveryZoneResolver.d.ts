import { GraphQLResolveInfo } from "graphql";
import { CreateDeliveryZoneArgs } from "./args/CreateDeliveryZoneArgs";
import { DeliveryZone } from "../../../models/DeliveryZone";
export declare class CreateDeliveryZoneResolver {
    createDeliveryZone(ctx: any, info: GraphQLResolveInfo, args: CreateDeliveryZoneArgs): Promise<DeliveryZone>;
}
