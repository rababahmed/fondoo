import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOrderElementArgs } from "./args/CreateOrderElementArgs";
import { OrderElement } from "../../../models/OrderElement";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OrderElement)
export class CreateOrderElementResolver {
  @TypeGraphQL.Mutation(_returns => OrderElement, {
    nullable: false
  })
  async createOrderElement(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOrderElementArgs): Promise<OrderElement> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).orderElement.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
