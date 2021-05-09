import * as TypeGraphQL from "type-graphql";
import { DeliveryZone } from "../../../models/DeliveryZone";
import { Restaurant } from "../../../models/Restaurant";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DeliveryZone)
export class DeliveryZoneRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Restaurant, {
    nullable: true
  })
  async Restaurant(@TypeGraphQL.Root() deliveryZone: DeliveryZone, @TypeGraphQL.Ctx() ctx: any): Promise<Restaurant | null> {
    return getPrismaFromContext(ctx).deliveryZone.findUnique({
      where: {
        id: deliveryZone.id,
      },
    }).Restaurant({});
  }
}
