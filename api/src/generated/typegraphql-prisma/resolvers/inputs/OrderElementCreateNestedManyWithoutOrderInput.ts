import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderElementCreateManyOrderInputEnvelope } from "../inputs/OrderElementCreateManyOrderInputEnvelope";
import { OrderElementCreateOrConnectWithoutOrderInput } from "../inputs/OrderElementCreateOrConnectWithoutOrderInput";
import { OrderElementCreateWithoutOrderInput } from "../inputs/OrderElementCreateWithoutOrderInput";
import { OrderElementWhereUniqueInput } from "../inputs/OrderElementWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderElementCreateNestedManyWithoutOrderInput {
  @TypeGraphQL.Field(_type => [OrderElementCreateWithoutOrderInput], {
    nullable: true
  })
  create?: OrderElementCreateWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderElementCreateOrConnectWithoutOrderInput], {
    nullable: true
  })
  connectOrCreate?: OrderElementCreateOrConnectWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderElementCreateManyOrderInputEnvelope, {
    nullable: true
  })
  createMany?: OrderElementCreateManyOrderInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OrderElementWhereUniqueInput], {
    nullable: true
  })
  connect?: OrderElementWhereUniqueInput[] | undefined;
}
