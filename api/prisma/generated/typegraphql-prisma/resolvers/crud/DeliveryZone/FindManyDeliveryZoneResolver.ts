import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyDeliveryZoneArgs } from "./args/FindManyDeliveryZoneArgs";
import { DeliveryZone } from "../../../models/DeliveryZone";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DeliveryZone)
export class FindManyDeliveryZoneResolver {
  @TypeGraphQL.Query(_returns => [DeliveryZone], {
    nullable: false
  })
  async deliveryZones(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyDeliveryZoneArgs): Promise<DeliveryZone[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).deliveryZone.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
