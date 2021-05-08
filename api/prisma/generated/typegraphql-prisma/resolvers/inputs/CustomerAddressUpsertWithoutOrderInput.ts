import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerAddressCreateWithoutOrderInput } from "../inputs/CustomerAddressCreateWithoutOrderInput";
import { CustomerAddressUpdateWithoutOrderInput } from "../inputs/CustomerAddressUpdateWithoutOrderInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CustomerAddressUpsertWithoutOrderInput {
  @TypeGraphQL.Field(_type => CustomerAddressUpdateWithoutOrderInput, {
    nullable: false
  })
  update!: CustomerAddressUpdateWithoutOrderInput;

  @TypeGraphQL.Field(_type => CustomerAddressCreateWithoutOrderInput, {
    nullable: false
  })
  create!: CustomerAddressCreateWithoutOrderInput;
}
