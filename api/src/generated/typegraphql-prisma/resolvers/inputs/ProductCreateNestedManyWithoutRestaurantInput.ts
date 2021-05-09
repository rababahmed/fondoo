import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateManyRestaurantInputEnvelope } from "../inputs/ProductCreateManyRestaurantInputEnvelope";
import { ProductCreateOrConnectWithoutRestaurantInput } from "../inputs/ProductCreateOrConnectWithoutRestaurantInput";
import { ProductCreateWithoutRestaurantInput } from "../inputs/ProductCreateWithoutRestaurantInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductCreateNestedManyWithoutRestaurantInput {
  @TypeGraphQL.Field(_type => [ProductCreateWithoutRestaurantInput], {
    nullable: true
  })
  create?: ProductCreateWithoutRestaurantInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutRestaurantInput], {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutRestaurantInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductCreateManyRestaurantInputEnvelope, {
    nullable: true
  })
  createMany?: ProductCreateManyRestaurantInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductWhereUniqueInput[] | undefined;
}
