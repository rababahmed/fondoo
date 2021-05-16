import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCustomerArgs } from "./args/FindUniqueCustomerArgs";
import { Customer } from "../../../models/Customer";
export declare class FindUniqueCustomerResolver {
    findUniqueCustomer(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCustomerArgs): Promise<Customer | null>;
}
