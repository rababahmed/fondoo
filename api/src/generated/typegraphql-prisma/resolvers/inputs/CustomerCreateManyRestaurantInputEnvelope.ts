import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateManyRestaurantInput } from "../inputs/CustomerCreateManyRestaurantInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CustomerCreateManyRestaurantInputEnvelope {
  @TypeGraphQL.Field(_type => [CustomerCreateManyRestaurantInput], {
    nullable: false
  })
  data!: CustomerCreateManyRestaurantInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
