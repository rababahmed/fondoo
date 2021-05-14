import { GraphQLResolveInfo } from "graphql";
import { CreateManyCustomerAddressArgs } from "./args/CreateManyCustomerAddressArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyCustomerAddressResolver {
    createManyCustomerAddress(ctx: any, info: GraphQLResolveInfo, args: CreateManyCustomerAddressArgs): Promise<AffectedRowsOutput>;
}
