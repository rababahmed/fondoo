import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerTokenUpdateManyWithoutCustomerInput } from "../inputs/CustomerTokenUpdateManyWithoutCustomerInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { OrderUpdateManyWithoutCustomerInput } from "../inputs/OrderUpdateManyWithoutCustomerInput";
import { RestaurantUpdateOneWithoutCustomersInput } from "../inputs/RestaurantUpdateOneWithoutCustomersInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CustomerUpdateWithoutAddressInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  firstName?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  lastName?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  phone?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CustomerTokenUpdateManyWithoutCustomerInput, {
    nullable: true
  })
  token?: CustomerTokenUpdateManyWithoutCustomerInput | undefined;

  @TypeGraphQL.Field(_type => OrderUpdateManyWithoutCustomerInput, {
    nullable: true
  })
  orders?: OrderUpdateManyWithoutCustomerInput | undefined;

  @TypeGraphQL.Field(_type => RestaurantUpdateOneWithoutCustomersInput, {
    nullable: true
  })
  Restaurant?: RestaurantUpdateOneWithoutCustomersInput | undefined;
}
