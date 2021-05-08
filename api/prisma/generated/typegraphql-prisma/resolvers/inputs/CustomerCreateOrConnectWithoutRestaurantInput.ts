import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateWithoutRestaurantInput } from "../inputs/CustomerCreateWithoutRestaurantInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CustomerCreateOrConnectWithoutRestaurantInput {
  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutRestaurantInput, {
    nullable: false
  })
  create!: CustomerCreateWithoutRestaurantInput;
}
