import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerTokenOrderByInput } from "../../../inputs/CustomerTokenOrderByInput";
import { CustomerTokenWhereInput } from "../../../inputs/CustomerTokenWhereInput";
import { CustomerTokenWhereUniqueInput } from "../../../inputs/CustomerTokenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCustomerTokenArgs {
  @TypeGraphQL.Field(_type => CustomerTokenWhereInput, {
    nullable: true
  })
  where?: CustomerTokenWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CustomerTokenOrderByInput], {
    nullable: true
  })
  orderBy?: CustomerTokenOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => CustomerTokenWhereUniqueInput, {
    nullable: true
  })
  cursor?: CustomerTokenWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
