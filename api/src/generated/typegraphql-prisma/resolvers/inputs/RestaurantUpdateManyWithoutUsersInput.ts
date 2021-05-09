import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RestaurantCreateOrConnectWithoutUsersInput } from "../inputs/RestaurantCreateOrConnectWithoutUsersInput";
import { RestaurantCreateWithoutUsersInput } from "../inputs/RestaurantCreateWithoutUsersInput";
import { RestaurantScalarWhereInput } from "../inputs/RestaurantScalarWhereInput";
import { RestaurantUpdateManyWithWhereWithoutUsersInput } from "../inputs/RestaurantUpdateManyWithWhereWithoutUsersInput";
import { RestaurantUpdateWithWhereUniqueWithoutUsersInput } from "../inputs/RestaurantUpdateWithWhereUniqueWithoutUsersInput";
import { RestaurantUpsertWithWhereUniqueWithoutUsersInput } from "../inputs/RestaurantUpsertWithWhereUniqueWithoutUsersInput";
import { RestaurantWhereUniqueInput } from "../inputs/RestaurantWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RestaurantUpdateManyWithoutUsersInput {
  @TypeGraphQL.Field(_type => [RestaurantCreateWithoutUsersInput], {
    nullable: true
  })
  create?: RestaurantCreateWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [RestaurantCreateOrConnectWithoutUsersInput], {
    nullable: true
  })
  connectOrCreate?: RestaurantCreateOrConnectWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [RestaurantUpsertWithWhereUniqueWithoutUsersInput], {
    nullable: true
  })
  upsert?: RestaurantUpsertWithWhereUniqueWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [RestaurantWhereUniqueInput], {
    nullable: true
  })
  connect?: RestaurantWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RestaurantWhereUniqueInput], {
    nullable: true
  })
  set?: RestaurantWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RestaurantWhereUniqueInput], {
    nullable: true
  })
  disconnect?: RestaurantWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RestaurantWhereUniqueInput], {
    nullable: true
  })
  delete?: RestaurantWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RestaurantUpdateWithWhereUniqueWithoutUsersInput], {
    nullable: true
  })
  update?: RestaurantUpdateWithWhereUniqueWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [RestaurantUpdateManyWithWhereWithoutUsersInput], {
    nullable: true
  })
  updateMany?: RestaurantUpdateManyWithWhereWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [RestaurantScalarWhereInput], {
    nullable: true
  })
  deleteMany?: RestaurantScalarWhereInput[] | undefined;
}
