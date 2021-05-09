import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderElementOrderByInput } from "../../../inputs/OrderElementOrderByInput";
import { OrderElementScalarWhereWithAggregatesInput } from "../../../inputs/OrderElementScalarWhereWithAggregatesInput";
import { OrderElementWhereInput } from "../../../inputs/OrderElementWhereInput";
import { OrderElementScalarFieldEnum } from "../../../../enums/OrderElementScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByOrderElementArgs {
  @TypeGraphQL.Field(_type => OrderElementWhereInput, {
    nullable: true
  })
  where?: OrderElementWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OrderElementOrderByInput], {
    nullable: true
  })
  orderBy?: OrderElementOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderElementScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "code" | "name" | "description" | "image" | "price" | "addonText" | "orderId" | "productCategoryId" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => OrderElementScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: OrderElementScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
