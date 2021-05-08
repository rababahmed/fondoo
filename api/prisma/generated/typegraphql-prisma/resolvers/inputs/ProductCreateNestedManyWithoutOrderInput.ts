import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateManyOrderInputEnvelope } from "../inputs/ProductCreateManyOrderInputEnvelope";
import { ProductCreateOrConnectWithoutOrderInput } from "../inputs/ProductCreateOrConnectWithoutOrderInput";
import { ProductCreateWithoutOrderInput } from "../inputs/ProductCreateWithoutOrderInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductCreateNestedManyWithoutOrderInput {
  @TypeGraphQL.Field(_type => [ProductCreateWithoutOrderInput], {
    nullable: true
  })
  create?: ProductCreateWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutOrderInput], {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductCreateManyOrderInputEnvelope, {
    nullable: true
  })
  createMany?: ProductCreateManyOrderInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductWhereUniqueInput[] | undefined;
}
