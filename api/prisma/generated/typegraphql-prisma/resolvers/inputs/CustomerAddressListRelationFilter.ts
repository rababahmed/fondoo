import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerAddressWhereInput } from "../inputs/CustomerAddressWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CustomerAddressListRelationFilter {
  @TypeGraphQL.Field(_type => CustomerAddressWhereInput, {
    nullable: true
  })
  every?: CustomerAddressWhereInput | undefined;

  @TypeGraphQL.Field(_type => CustomerAddressWhereInput, {
    nullable: true
  })
  some?: CustomerAddressWhereInput | undefined;

  @TypeGraphQL.Field(_type => CustomerAddressWhereInput, {
    nullable: true
  })
  none?: CustomerAddressWhereInput | undefined;
}
