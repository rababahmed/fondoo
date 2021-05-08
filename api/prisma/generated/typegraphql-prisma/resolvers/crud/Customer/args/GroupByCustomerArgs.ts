import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerOrderByInput } from "../../../inputs/CustomerOrderByInput";
import { CustomerScalarWhereWithAggregatesInput } from "../../../inputs/CustomerScalarWhereWithAggregatesInput";
import { CustomerWhereInput } from "../../../inputs/CustomerWhereInput";
import { CustomerScalarFieldEnum } from "../../../../enums/CustomerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCustomerArgs {
  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  where?: CustomerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CustomerOrderByInput], {
    nullable: true
  })
  orderBy?: CustomerOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "firstName" | "lastName" | "email" | "password" | "phone" | "restaurantId" | "updatedAt">;

  @TypeGraphQL.Field(_type => CustomerScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CustomerScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
