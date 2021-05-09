import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateManyRestaurantInput } from "../inputs/ProductCreateManyRestaurantInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductCreateManyRestaurantInputEnvelope {
  @TypeGraphQL.Field(_type => [ProductCreateManyRestaurantInput], {
    nullable: false
  })
  data!: ProductCreateManyRestaurantInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
