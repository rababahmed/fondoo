import { GraphQLResolveInfo } from "graphql";
import { GroupByCustomerAddressArgs } from "./args/GroupByCustomerAddressArgs";
import { CustomerAddressGroupBy } from "../../outputs/CustomerAddressGroupBy";
export declare class GroupByCustomerAddressResolver {
    groupByCustomerAddress(ctx: any, info: GraphQLResolveInfo, args: GroupByCustomerAddressArgs): Promise<CustomerAddressGroupBy[]>;
}
