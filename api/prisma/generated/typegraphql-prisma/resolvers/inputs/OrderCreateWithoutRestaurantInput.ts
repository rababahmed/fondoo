import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerAddressCreateNestedOneWithoutOrderInput } from "../inputs/CustomerAddressCreateNestedOneWithoutOrderInput";
import { CustomerCreateNestedOneWithoutOrdersInput } from "../inputs/CustomerCreateNestedOneWithoutOrdersInput";
import { OrderElementCreateNestedManyWithoutOrderInput } from "../inputs/OrderElementCreateNestedManyWithoutOrderInput";
import { ProductCreateNestedManyWithoutOrderInput } from "../inputs/ProductCreateNestedManyWithoutOrderInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderCreateWithoutRestaurantInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  charges?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  total?: number | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isAccepted?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => OrderElementCreateNestedManyWithoutOrderInput, {
    nullable: true
  })
  elements?: OrderElementCreateNestedManyWithoutOrderInput | undefined;

  @TypeGraphQL.Field(_type => CustomerAddressCreateNestedOneWithoutOrderInput, {
    nullable: false
  })
  customerAddress!: CustomerAddressCreateNestedOneWithoutOrderInput;

  @TypeGraphQL.Field(_type => CustomerCreateNestedOneWithoutOrdersInput, {
    nullable: true
  })
  customer?: CustomerCreateNestedOneWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutOrderInput, {
    nullable: true
  })
  product?: ProductCreateNestedManyWithoutOrderInput | undefined;
}
