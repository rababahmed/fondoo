import { GraphQLResolveInfo } from "graphql";
import { UpdateManyCustomerAddressArgs } from "./args/UpdateManyCustomerAddressArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyCustomerAddressResolver {
    updateManyCustomerAddress(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCustomerAddressArgs): Promise<AffectedRowsOutput>;
}
