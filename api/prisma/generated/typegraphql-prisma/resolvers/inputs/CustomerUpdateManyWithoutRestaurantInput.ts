import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateManyRestaurantInputEnvelope } from "../inputs/CustomerCreateManyRestaurantInputEnvelope";
import { CustomerCreateOrConnectWithoutRestaurantInput } from "../inputs/CustomerCreateOrConnectWithoutRestaurantInput";
import { CustomerCreateWithoutRestaurantInput } from "../inputs/CustomerCreateWithoutRestaurantInput";
import { CustomerScalarWhereInput } from "../inputs/CustomerScalarWhereInput";
import { CustomerUpdateManyWithWhereWithoutRestaurantInput } from "../inputs/CustomerUpdateManyWithWhereWithoutRestaurantInput";
import { CustomerUpdateWithWhereUniqueWithoutRestaurantInput } from "../inputs/CustomerUpdateWithWhereUniqueWithoutRestaurantInput";
import { CustomerUpsertWithWhereUniqueWithoutRestaurantInput } from "../inputs/CustomerUpsertWithWhereUniqueWithoutRestaurantInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CustomerUpdateManyWithoutRestaurantInput {
  @TypeGraphQL.Field(_type => [CustomerCreateWithoutRestaurantInput], {
    nullable: true
  })
  create?: CustomerCreateWithoutRestaurantInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerCreateOrConnectWithoutRestaurantInput], {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutRestaurantInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerUpsertWithWhereUniqueWithoutRestaurantInput], {
    nullable: true
  })
  upsert?: CustomerUpsertWithWhereUniqueWithoutRestaurantInput[] | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateManyRestaurantInputEnvelope, {
    nullable: true
  })
  createMany?: CustomerCreateManyRestaurantInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CustomerWhereUniqueInput], {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerWhereUniqueInput], {
    nullable: true
  })
  set?: CustomerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CustomerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerWhereUniqueInput], {
    nullable: true
  })
  delete?: CustomerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerUpdateWithWhereUniqueWithoutRestaurantInput], {
    nullable: true
  })
  update?: CustomerUpdateWithWhereUniqueWithoutRestaurantInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerUpdateManyWithWhereWithoutRestaurantInput], {
    nullable: true
  })
  updateMany?: CustomerUpdateManyWithWhereWithoutRestaurantInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CustomerScalarWhereInput[] | undefined;
}
