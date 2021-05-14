import { GraphQLResolveInfo } from "graphql";
import { AggregateCustomerAddressArgs } from "./args/AggregateCustomerAddressArgs";
import { AggregateCustomerAddress } from "../../outputs/AggregateCustomerAddress";
export declare class AggregateCustomerAddressResolver {
    aggregateCustomerAddress(ctx: any, info: GraphQLResolveInfo, args: AggregateCustomerAddressArgs): Promise<AggregateCustomerAddress>;
}
