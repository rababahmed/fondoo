import { GraphQLResolveInfo } from "graphql";
import { AggregateCustomerAddressArgs } from "./args/AggregateCustomerAddressArgs";
import { CreateCustomerAddressArgs } from "./args/CreateCustomerAddressArgs";
import { CreateManyCustomerAddressArgs } from "./args/CreateManyCustomerAddressArgs";
import { DeleteCustomerAddressArgs } from "./args/DeleteCustomerAddressArgs";
import { DeleteManyCustomerAddressArgs } from "./args/DeleteManyCustomerAddressArgs";
import { FindFirstCustomerAddressArgs } from "./args/FindFirstCustomerAddressArgs";
import { FindManyCustomerAddressArgs } from "./args/FindManyCustomerAddressArgs";
import { FindUniqueCustomerAddressArgs } from "./args/FindUniqueCustomerAddressArgs";
import { GroupByCustomerAddressArgs } from "./args/GroupByCustomerAddressArgs";
import { UpdateCustomerAddressArgs } from "./args/UpdateCustomerAddressArgs";
import { UpdateManyCustomerAddressArgs } from "./args/UpdateManyCustomerAddressArgs";
import { UpsertCustomerAddressArgs } from "./args/UpsertCustomerAddressArgs";
import { CustomerAddress } from "../../../models/CustomerAddress";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCustomerAddress } from "../../outputs/AggregateCustomerAddress";
import { CustomerAddressGroupBy } from "../../outputs/CustomerAddressGroupBy";
export declare class CustomerAddressCrudResolver {
    customerAddress(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCustomerAddressArgs): Promise<CustomerAddress | null>;
    findFirstCustomerAddress(ctx: any, info: GraphQLResolveInfo, args: FindFirstCustomerAddressArgs): Promise<CustomerAddress | null>;
    customerAddresses(ctx: any, info: GraphQLResolveInfo, args: FindManyCustomerAddressArgs): Promise<CustomerAddress[]>;
    createCustomerAddress(ctx: any, info: GraphQLResolveInfo, args: CreateCustomerAddressArgs): Promise<CustomerAddress>;
    createManyCustomerAddress(ctx: any, info: GraphQLResolveInfo, args: CreateManyCustomerAddressArgs): Promise<AffectedRowsOutput>;
    deleteCustomerAddress(ctx: any, info: GraphQLResolveInfo, args: DeleteCustomerAddressArgs): Promise<CustomerAddress | null>;
    updateCustomerAddress(ctx: any, info: GraphQLResolveInfo, args: UpdateCustomerAddressArgs): Promise<CustomerAddress | null>;
    deleteManyCustomerAddress(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCustomerAddressArgs): Promise<AffectedRowsOutput>;
    updateManyCustomerAddress(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCustomerAddressArgs): Promise<AffectedRowsOutput>;
    upsertCustomerAddress(ctx: any, info: GraphQLResolveInfo, args: UpsertCustomerAddressArgs): Promise<CustomerAddress>;
    aggregateCustomerAddress(ctx: any, info: GraphQLResolveInfo, args: AggregateCustomerAddressArgs): Promise<AggregateCustomerAddress>;
    groupByCustomerAddress(ctx: any, info: GraphQLResolveInfo, args: GroupByCustomerAddressArgs): Promise<CustomerAddressGroupBy[]>;
}
