import { GraphQLResolveInfo } from "graphql";
import { AggregateOrderElementArgs } from "./args/AggregateOrderElementArgs";
import { CreateManyOrderElementArgs } from "./args/CreateManyOrderElementArgs";
import { CreateOrderElementArgs } from "./args/CreateOrderElementArgs";
import { DeleteManyOrderElementArgs } from "./args/DeleteManyOrderElementArgs";
import { DeleteOrderElementArgs } from "./args/DeleteOrderElementArgs";
import { FindFirstOrderElementArgs } from "./args/FindFirstOrderElementArgs";
import { FindManyOrderElementArgs } from "./args/FindManyOrderElementArgs";
import { FindUniqueOrderElementArgs } from "./args/FindUniqueOrderElementArgs";
import { GroupByOrderElementArgs } from "./args/GroupByOrderElementArgs";
import { UpdateManyOrderElementArgs } from "./args/UpdateManyOrderElementArgs";
import { UpdateOrderElementArgs } from "./args/UpdateOrderElementArgs";
import { UpsertOrderElementArgs } from "./args/UpsertOrderElementArgs";
import { OrderElement } from "../../../models/OrderElement";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateOrderElement } from "../../outputs/AggregateOrderElement";
import { OrderElementGroupBy } from "../../outputs/OrderElementGroupBy";
export declare class OrderElementCrudResolver {
    orderElement(ctx: any, info: GraphQLResolveInfo, args: FindUniqueOrderElementArgs): Promise<OrderElement | null>;
    findFirstOrderElement(ctx: any, info: GraphQLResolveInfo, args: FindFirstOrderElementArgs): Promise<OrderElement | null>;
    orderElements(ctx: any, info: GraphQLResolveInfo, args: FindManyOrderElementArgs): Promise<OrderElement[]>;
    createOrderElement(ctx: any, info: GraphQLResolveInfo, args: CreateOrderElementArgs): Promise<OrderElement>;
    createManyOrderElement(ctx: any, info: GraphQLResolveInfo, args: CreateManyOrderElementArgs): Promise<AffectedRowsOutput>;
    deleteOrderElement(ctx: any, info: GraphQLResolveInfo, args: DeleteOrderElementArgs): Promise<OrderElement | null>;
    updateOrderElement(ctx: any, info: GraphQLResolveInfo, args: UpdateOrderElementArgs): Promise<OrderElement | null>;
    deleteManyOrderElement(ctx: any, info: GraphQLResolveInfo, args: DeleteManyOrderElementArgs): Promise<AffectedRowsOutput>;
    updateManyOrderElement(ctx: any, info: GraphQLResolveInfo, args: UpdateManyOrderElementArgs): Promise<AffectedRowsOutput>;
    upsertOrderElement(ctx: any, info: GraphQLResolveInfo, args: UpsertOrderElementArgs): Promise<OrderElement>;
    aggregateOrderElement(ctx: any, info: GraphQLResolveInfo, args: AggregateOrderElementArgs): Promise<AggregateOrderElement>;
    groupByOrderElement(ctx: any, info: GraphQLResolveInfo, args: GroupByOrderElementArgs): Promise<OrderElementGroupBy[]>;
}
