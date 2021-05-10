import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutOrdersInput } from "../inputs/UserCreateOrConnectWithoutOrdersInput";
import { UserCreateWithoutOrdersInput } from "../inputs/UserCreateWithoutOrdersInput";
import { UserUpdateWithoutOrdersInput } from "../inputs/UserUpdateWithoutOrdersInput";
import { UserUpsertWithoutOrdersInput } from "../inputs/UserUpsertWithoutOrdersInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutOrdersInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutOrdersInput, {
    nullable: true
  })
  create?: UserCreateWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutOrdersInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutOrdersInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutOrdersInput, {
    nullable: true
  })
  update?: UserUpdateWithoutOrdersInput | undefined;
}
