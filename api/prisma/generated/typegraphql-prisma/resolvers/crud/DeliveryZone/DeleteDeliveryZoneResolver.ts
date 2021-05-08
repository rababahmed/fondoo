import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteDeliveryZoneArgs } from "./args/DeleteDeliveryZoneArgs";
import { DeliveryZone } from "../../../models/DeliveryZone";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DeliveryZone)
export class DeleteDeliveryZoneResolver {
  @TypeGraphQL.Mutation(_returns => DeliveryZone, {
    nullable: true
  })
  async deleteDeliveryZone(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteDeliveryZoneArgs): Promise<DeliveryZone | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).deliveryZone.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
