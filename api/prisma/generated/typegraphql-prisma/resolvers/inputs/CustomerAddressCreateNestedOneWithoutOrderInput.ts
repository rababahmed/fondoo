import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerAddressCreateOrConnectWithoutOrderInput } from "../inputs/CustomerAddressCreateOrConnectWithoutOrderInput";
import { CustomerAddressCreateWithoutOrderInput } from "../inputs/CustomerAddressCreateWithoutOrderInput";
import { CustomerAddressWhereUniqueInput } from "../inputs/CustomerAddressWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CustomerAddressCreateNestedOneWithoutOrderInput {
  @TypeGraphQL.Field(_type => CustomerAddressCreateWithoutOrderInput, {
    nullable: true
  })
  create?: CustomerAddressCreateWithoutOrderInput | undefined;

  @TypeGraphQL.Field(_type => CustomerAddressCreateOrConnectWithoutOrderInput, {
    nullable: true
  })
  connectOrCreate?: CustomerAddressCreateOrConnectWithoutOrderInput | undefined;

  @TypeGraphQL.Field(_type => CustomerAddressWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomerAddressWhereUniqueInput | undefined;
}
