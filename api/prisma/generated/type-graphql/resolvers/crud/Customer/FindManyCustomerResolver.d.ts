import { GraphQLResolveInfo } from "graphql";
import { FindManyCustomerArgs } from "./args/FindManyCustomerArgs";
import { Customer } from "../../../models/Customer";
export declare class FindManyCustomerResolver {
    findManyCustomer(ctx: any, info: GraphQLResolveInfo, args: FindManyCustomerArgs): Promise<Customer[]>;
}
