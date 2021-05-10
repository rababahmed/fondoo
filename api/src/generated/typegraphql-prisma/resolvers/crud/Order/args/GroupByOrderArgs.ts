import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderOrderByInput } from "../../../inputs/OrderOrderByInput";
import { OrderScalarWhereWithAggregatesInput } from "../../../inputs/OrderScalarWhereWithAggregatesInput";
import { OrderWhereInput } from "../../../inputs/OrderWhereInput";
import { OrderScalarFieldEnum } from "../../../../enums/OrderScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByOrderArgs {
  @TypeGraphQL.Field(_type => OrderWhereInput, {
    nullable: true
  })
  where?: OrderWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OrderOrderByInput], {
    nullable: true
  })
  orderBy?: OrderOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "items" | "coupon" | "deliveryCharges" | "vat" | "serviceCharge" | "total" | "isAccepted" | "createdAt" | "updatedAt" | "userId" | "restaurantId" | "customerId" | "customerAddressId">;

  @TypeGraphQL.Field(_type => OrderScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: OrderScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
