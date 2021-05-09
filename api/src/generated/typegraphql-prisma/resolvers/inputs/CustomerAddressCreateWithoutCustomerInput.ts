import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateNestedManyWithoutCustomerAddressInput } from "../inputs/OrderCreateNestedManyWithoutCustomerAddressInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CustomerAddressCreateWithoutCustomerInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  streetAddress!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  city!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  postCode!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  country!: string;

  @TypeGraphQL.Field(_type => OrderCreateNestedManyWithoutCustomerAddressInput, {
    nullable: true
  })
  Order?: OrderCreateNestedManyWithoutCustomerAddressInput | undefined;
}
