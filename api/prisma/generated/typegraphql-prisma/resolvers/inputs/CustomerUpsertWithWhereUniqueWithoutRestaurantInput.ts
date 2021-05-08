import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateWithoutRestaurantInput } from "../inputs/CustomerCreateWithoutRestaurantInput";
import { CustomerUpdateWithoutRestaurantInput } from "../inputs/CustomerUpdateWithoutRestaurantInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CustomerUpsertWithWhereUniqueWithoutRestaurantInput {
  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerUpdateWithoutRestaurantInput, {
    nullable: false
  })
  update!: CustomerUpdateWithoutRestaurantInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutRestaurantInput, {
    nullable: false
  })
  create!: CustomerCreateWithoutRestaurantInput;
}
