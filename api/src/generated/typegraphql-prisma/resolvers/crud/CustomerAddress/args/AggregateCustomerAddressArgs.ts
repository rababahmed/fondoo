import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerAddressOrderByInput } from "../../../inputs/CustomerAddressOrderByInput";
import { CustomerAddressWhereInput } from "../../../inputs/CustomerAddressWhereInput";
import { CustomerAddressWhereUniqueInput } from "../../../inputs/CustomerAddressWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCustomerAddressArgs {
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
}
