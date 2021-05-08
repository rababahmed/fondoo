import { GraphQLResolveInfo } from "graphql";
import { DeleteManyCustomerAddressArgs } from "./args/DeleteManyCustomerAddressArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyCustomerAddressResolver {
    deleteManyCustomerAddress(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCustomerAddressArgs): Promise<AffectedRowsOutput>;
}
