import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateDeliveryZoneArgs } from "./args/CreateDeliveryZoneArgs";
import { DeliveryZone } from "../../../models/DeliveryZone";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DeliveryZone)
export class CreateDeliveryZoneResolver {
  @TypeGraphQL.Mutation(_returns => DeliveryZone, {
    nullable: false
  })
  async createDeliveryZone(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateDeliveryZoneArgs): Promise<DeliveryZone> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).deliveryZone.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
