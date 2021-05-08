import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerAddressOrderByInput } from "../../../inputs/CustomerAddressOrderByInput";
import { CustomerAddressScalarWhereWithAggregatesInput } from "../../../inputs/CustomerAddressScalarWhereWithAggregatesInput";
import { CustomerAddressWhereInput } from "../../../inputs/CustomerAddressWhereInput";
import { CustomerAddressScalarFieldEnum } from "../../../../enums/CustomerAddressScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCustomerAddressArgs {
  @TypeGraphQL.Field(_type => CustomerAddressWhereInput, {
    nullable: true
  })
  where?: CustomerAddressWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CustomerAddressOrderByInput], {
    nullable: true
  })
  orderBy?: CustomerAddressOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerAddressScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "streetAddress" | "city" | "postCode" | "country" | "customerId">;

  @TypeGraphQL.Field(_type => CustomerAddressScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CustomerAddressScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
