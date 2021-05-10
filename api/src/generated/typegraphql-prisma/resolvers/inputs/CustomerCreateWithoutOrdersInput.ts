import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerAddressCreateNestedManyWithoutCustomerInput } from "../inputs/CustomerAddressCreateNestedManyWithoutCustomerInput";
import { CustomerTokenCreateNestedManyWithoutCustomerInput } from "../inputs/CustomerTokenCreateNestedManyWithoutCustomerInput";
import { RestaurantCreateNestedOneWithoutCustomersInput } from "../inputs/RestaurantCreateNestedOneWithoutCustomersInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CustomerCreateWithoutOrdersInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  firstName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lastName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  phone!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => CustomerTokenCreateNestedManyWithoutCustomerInput, {
    nullable: true
  })
  token?: CustomerTokenCreateNestedManyWithoutCustomerInput | undefined;

  @TypeGraphQL.Field(_type => CustomerAddressCreateNestedManyWithoutCustomerInput, {
    nullable: true
  })
  address?: CustomerAddressCreateNestedManyWithoutCustomerInput | undefined;

  @TypeGraphQL.Field(_type => RestaurantCreateNestedOneWithoutCustomersInput, {
    nullable: true
  })
  Restaurant?: RestaurantCreateNestedOneWithoutCustomersInput | undefined;
}
