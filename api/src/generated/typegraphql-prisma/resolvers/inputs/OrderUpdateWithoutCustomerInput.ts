import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CustomerAddressUpdateOneWithoutOrderInput } from "../inputs/CustomerAddressUpdateOneWithoutOrderInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { RestaurantUpdateOneRequiredWithoutOrdersInput } from "../inputs/RestaurantUpdateOneRequiredWithoutOrdersInput";
import { UserUpdateOneRequiredWithoutOrdersInput } from "../inputs/UserUpdateOneRequiredWithoutOrdersInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderUpdateWithoutCustomerInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  items?: Prisma.InputJsonValue | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  coupon?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput, {
    nullable: true
  })
  deliveryCharges?: FloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput, {
    nullable: true
  })
  vat?: FloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput, {
    nullable: true
  })
  serviceCharge?: FloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput, {
    nullable: true
  })
  total?: FloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  isAccepted?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutOrdersInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => RestaurantUpdateOneRequiredWithoutOrdersInput, {
    nullable: true
  })
  restaurant?: RestaurantUpdateOneRequiredWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => CustomerAddressUpdateOneWithoutOrderInput, {
    nullable: true
  })
  CustomerAddress?: CustomerAddressUpdateOneWithoutOrderInput | undefined;
}
