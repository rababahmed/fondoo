import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartElementUpdateManyWithoutProductInput } from "../inputs/CartElementUpdateManyWithoutProductInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumSpiceLevelFieldUpdateOperationsInput } from "../inputs/EnumSpiceLevelFieldUpdateOperationsInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrderUpdateOneWithoutProductInput } from "../inputs/OrderUpdateOneWithoutProductInput";
import { ProductCategoryUpdateOneRequiredWithoutProductInput } from "../inputs/ProductCategoryUpdateOneRequiredWithoutProductInput";
import { RestaurantUpdateOneWithoutProductsInput } from "../inputs/RestaurantUpdateOneWithoutProductsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  image?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  price?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumSpiceLevelFieldUpdateOperationsInput, {
    nullable: true
  })
  spiceLevel?: EnumSpiceLevelFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  isPopular?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  isActive?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ProductCategoryUpdateOneRequiredWithoutProductInput, {
    nullable: true
  })
  category?: ProductCategoryUpdateOneRequiredWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => RestaurantUpdateOneWithoutProductsInput, {
    nullable: true
  })
  Restaurant?: RestaurantUpdateOneWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => OrderUpdateOneWithoutProductInput, {
    nullable: true
  })
  Order?: OrderUpdateOneWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => CartElementUpdateManyWithoutProductInput, {
    nullable: true
  })
  CartElement?: CartElementUpdateManyWithoutProductInput | undefined;
}
