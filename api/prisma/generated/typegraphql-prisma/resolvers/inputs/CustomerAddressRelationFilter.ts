import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerAddressWhereInput } from "../inputs/CustomerAddressWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CustomerAddressRelationFilter {
  @TypeGraphQL.Field(_type => CustomerAddressWhereInput, {
    nullable: true
  })
  is?: CustomerAddressWhereInput | undefined;

  @TypeGraphQL.Field(_type => CustomerAddressWhereInput, {
    nullable: true
  })
  isNot?: CustomerAddressWhereInput | undefined;
}
