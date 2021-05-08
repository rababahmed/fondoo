import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerAddressOrderByInput } from "../../../inputs/CustomerAddressOrderByInput";
import { CustomerAddressWhereInput } from "../../../inputs/CustomerAddressWhereInput";
import { CustomerAddressWhereUniqueInput } from "../../../inputs/CustomerAddressWhereUniqueInput";
import { CustomerAddressScalarFieldEnum } from "../../../../enums/CustomerAddressScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class CustomerAddressArgs {
  @TypeGraphQL.Field(_type => CustomerAddressWhereInput, {
    nullable: true
  })
  where?: CustomerAddressWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CustomerAddressOrderByInput], {
    nullable: true
  })
  orderBy?: CustomerAddressOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => CustomerAddressWhereUniqueInput, {
    nullable: true
  })
  cursor?: CustomerAddressWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CustomerAddressScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "streetAddress" | "city" | "postCode" | "country" | "customerId"> | undefined;
}
