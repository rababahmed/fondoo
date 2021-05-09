import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerTokenOrderByInput } from "../../../inputs/CustomerTokenOrderByInput";
import { CustomerTokenScalarWhereWithAggregatesInput } from "../../../inputs/CustomerTokenScalarWhereWithAggregatesInput";
import { CustomerTokenWhereInput } from "../../../inputs/CustomerTokenWhereInput";
import { CustomerTokenScalarFieldEnum } from "../../../../enums/CustomerTokenScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCustomerTokenArgs {
  @TypeGraphQL.Field(_type => CustomerTokenWhereInput, {
    nullable: true
  })
  where?: CustomerTokenWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CustomerTokenOrderByInput], {
    nullable: true
  })
  orderBy?: CustomerTokenOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerTokenScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "token" | "createdAt" | "updatedAt" | "customerId">;

  @TypeGraphQL.Field(_type => CustomerTokenScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CustomerTokenScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
