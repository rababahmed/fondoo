import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateManyRestaurantInputEnvelope } from "../inputs/CustomerCreateManyRestaurantInputEnvelope";
import { CustomerCreateOrConnectWithoutRestaurantInput } from "../inputs/CustomerCreateOrConnectWithoutRestaurantInput";
import { CustomerCreateWithoutRestaurantInput } from "../inputs/CustomerCreateWithoutRestaurantInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CustomerCreateNestedManyWithoutRestaurantInput {
  @TypeGraphQL.Field(_type => [CustomerCreateWithoutRestaurantInput], {
    nullable: true
  })
  create?: CustomerCreateWithoutRestaurantInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerCreateOrConnectWithoutRestaurantInput], {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutRestaurantInput[] | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateManyRestaurantInputEnvelope, {
    nullable: true
  })
  createMany?: CustomerCreateManyRestaurantInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CustomerWhereUniqueInput], {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput[] | undefined;
}
