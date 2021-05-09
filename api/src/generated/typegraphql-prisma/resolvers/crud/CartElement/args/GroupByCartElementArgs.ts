import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CartElementOrderByInput } from "../../../inputs/CartElementOrderByInput";
import { CartElementScalarWhereWithAggregatesInput } from "../../../inputs/CartElementScalarWhereWithAggregatesInput";
import { CartElementWhereInput } from "../../../inputs/CartElementWhereInput";
import { CartElementScalarFieldEnum } from "../../../../enums/CartElementScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCartElementArgs {
  @TypeGraphQL.Field(_type => CartElementWhereInput, {
    nullable: true
  })
  where?: CartElementWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CartElementOrderByInput], {
    nullable: true
  })
  orderBy?: CartElementOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartElementScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "quantity" | "customerId" | "productId" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => CartElementScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CartElementScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
