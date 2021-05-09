import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrderElementUpdateManyWithoutCategoryInput } from "../inputs/OrderElementUpdateManyWithoutCategoryInput";
import { ProductUpdateManyWithoutCategoryInput } from "../inputs/ProductUpdateManyWithoutCategoryInput";
import { RestaurantUpdateOneRequiredWithoutProductCategoryInput } from "../inputs/RestaurantUpdateOneRequiredWithoutProductCategoryInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductCategoryUpdateInput {
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

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  isActive?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  isFeatured?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => RestaurantUpdateOneRequiredWithoutProductCategoryInput, {
    nullable: true
  })
  restaurants?: RestaurantUpdateOneRequiredWithoutProductCategoryInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateManyWithoutCategoryInput, {
    nullable: true
  })
  Product?: ProductUpdateManyWithoutCategoryInput | undefined;

  @TypeGraphQL.Field(_type => OrderElementUpdateManyWithoutCategoryInput, {
    nullable: true
  })
  OrderElement?: OrderElementUpdateManyWithoutCategoryInput | undefined;
}
