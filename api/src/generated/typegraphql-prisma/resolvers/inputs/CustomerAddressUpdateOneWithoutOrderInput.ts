import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerAddressCreateOrConnectWithoutOrderInput } from "../inputs/CustomerAddressCreateOrConnectWithoutOrderInput";
import { CustomerAddressCreateWithoutOrderInput } from "../inputs/CustomerAddressCreateWithoutOrderInput";
import { CustomerAddressUpdateWithoutOrderInput } from "../inputs/CustomerAddressUpdateWithoutOrderInput";
import { CustomerAddressUpsertWithoutOrderInput } from "../inputs/CustomerAddressUpsertWithoutOrderInput";
import { CustomerAddressWhereUniqueInput } from "../inputs/CustomerAddressWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CustomerAddressUpdateOneWithoutOrderInput {
  @TypeGraphQL.Field(_type => CustomerAddressCreateWithoutOrderInput, {
    nullable: true
  })
  create?: CustomerAddressCreateWithoutOrderInput | undefined;

  @TypeGraphQL.Field(_type => CustomerAddressCreateOrConnectWithoutOrderInput, {
    nullable: true
  })
  connectOrCreate?: CustomerAddressCreateOrConnectWithoutOrderInput | undefined;

  @TypeGraphQL.Field(_type => CustomerAddressUpsertWithoutOrderInput, {
    nullable: true
  })
  upsert?: CustomerAddressUpsertWithoutOrderInput | undefined;

  @TypeGraphQL.Field(_type => CustomerAddressWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomerAddressWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => CustomerAddressUpdateWithoutOrderInput, {
    nullable: true
  })
  update?: CustomerAddressUpdateWithoutOrderInput | undefined;
}
