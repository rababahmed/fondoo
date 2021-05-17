import { GraphQLResolveInfo } from "graphql";
import { AggregateOrderItemArgs } from "./args/AggregateOrderItemArgs";
import { CreateManyOrderItemArgs } from "./args/CreateManyOrderItemArgs";
import { CreateOrderItemArgs } from "./args/CreateOrderItemArgs";
import { DeleteManyOrderItemArgs } from "./args/DeleteManyOrderItemArgs";
import { DeleteOrderItemArgs } from "./args/DeleteOrderItemArgs";
import { FindFirstOrderItemArgs } from "./args/FindFirstOrderItemArgs";
import { FindManyOrderItemArgs } from "./args/FindManyOrderItemArgs";
import { FindUniqueOrderItemArgs } from "./args/FindUniqueOrderItemArgs";
import { GroupByOrderItemArgs } from "./args/GroupByOrderItemArgs";
import { UpdateManyOrderItemArgs } from "./args/UpdateManyOrderItemArgs";
import { UpdateOrderItemArgs } from "./args/UpdateOrderItemArgs";
import { UpsertOrderItemArgs } from "./args/UpsertOrderItemArgs";
import { OrderItem } from "../../../models/OrderItem";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateOrderItem } from "../../outputs/AggregateOrderItem";
import { OrderItemGroupBy } from "../../outputs/OrderItemGroupBy";
export declare class OrderItemCrudResolver {
    orderItem(ctx: any, info: GraphQLResolveInfo, args: FindUniqueOrderItemArgs): Promise<OrderItem | null>;
    findFirstOrderItem(ctx: any, info: GraphQLResolveInfo, args: FindFirstOrderItemArgs): Promise<OrderItem | null>;
    orderItems(ctx: any, info: GraphQLResolveInfo, args: FindManyOrderItemArgs): Promise<OrderItem[]>;
    createOrderItem(ctx: any, info: GraphQLResolveInfo, args: CreateOrderItemArgs): Promise<OrderItem>;
    createManyOrderItem(ctx: any, info: GraphQLResolveInfo, args: CreateManyOrderItemArgs): Promise<AffectedRowsOutput>;
    deleteOrderItem(ctx: any, info: GraphQLResolveInfo, args: DeleteOrderItemArgs): Promise<OrderItem | null>;
    updateOrderItem(ctx: any, info: GraphQLResolveInfo, args: UpdateOrderItemArgs): Promise<OrderItem | null>;
    deleteManyOrderItem(ctx: any, info: GraphQLResolveInfo, args: DeleteManyOrderItemArgs): Promise<AffectedRowsOutput>;
    updateManyOrderItem(ctx: any, info: GraphQLResolveInfo, args: UpdateManyOrderItemArgs): Promise<AffectedRowsOutput>;
    upsertOrderItem(ctx: any, info: GraphQLResolveInfo, args: UpsertOrderItemArgs): Promise<OrderItem>;
    aggregateOrderItem(ctx: any, info: GraphQLResolveInfo, args: AggregateOrderItemArgs): Promise<AggregateOrderItem>;
    groupByOrderItem(ctx: any, info: GraphQLResolveInfo, args: GroupByOrderItemArgs): Promise<OrderItemGroupBy[]>;
}
