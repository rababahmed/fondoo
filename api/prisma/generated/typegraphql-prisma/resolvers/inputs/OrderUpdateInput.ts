import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerAddressUpdateOneRequiredWithoutOrderInput } from "../inputs/CustomerAddressUpdateOneRequiredWithoutOrderInput";
import { CustomerUpdateOneWithoutOrdersInput } from "../inputs/CustomerUpdateOneWithoutOrdersInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { OrderElementUpdateManyWithoutOrderInput } from "../inputs/OrderElementUpdateManyWithoutOrderInput";
import { ProductUpdateManyWithoutOrderInput } from "../inputs/ProductUpdateManyWithoutOrderInput";
import { RestaurantUpdateOneWithoutOrdersInput } from "../inputs/RestaurantUpdateOneWithoutOrdersInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderUpdateInput {
  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  charges?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  total?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  isAccepted?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => OrderElementUpdateManyWithoutOrderInput, {
    nullable: true
  })
  elements?: OrderElementUpdateManyWithoutOrderInput | undefined;

  @TypeGraphQL.Field(_type => CustomerAddressUpdateOneRequiredWithoutOrderInput, {
    nullable: true
  })
  customerAddress?: CustomerAddressUpdateOneRequiredWithoutOrderInput | undefined;

  @TypeGraphQL.Field(_type => RestaurantUpdateOneWithoutOrdersInput, {
    nullable: true
  })
  restaurant?: RestaurantUpdateOneWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpdateOneWithoutOrdersInput, {
    nullable: true
  })
  customer?: CustomerUpdateOneWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateManyWithoutOrderInput, {
    nullable: true
  })
  product?: ProductUpdateManyWithoutOrderInput | undefined;
}
