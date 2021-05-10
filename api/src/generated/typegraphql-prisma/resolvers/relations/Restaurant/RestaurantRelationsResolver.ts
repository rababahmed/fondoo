import * as TypeGraphQL from "type-graphql";
import { Customer } from "../../../models/Customer";
import { DeliveryZone } from "../../../models/DeliveryZone";
import { Order } from "../../../models/Order";
import { Product } from "../../../models/Product";
import { ProductCategory } from "../../../models/ProductCategory";
import { Restaurant } from "../../../models/Restaurant";
import { Schedule } from "../../../models/Schedule";
import { User } from "../../../models/User";
import { RestaurantCustomersArgs } from "./args/RestaurantCustomersArgs";
import { RestaurantDeliveryZonesArgs } from "./args/RestaurantDeliveryZonesArgs";
import { RestaurantOrdersArgs } from "./args/RestaurantOrdersArgs";
import { RestaurantProductCategoryArgs } from "./args/RestaurantProductCategoryArgs";
import { RestaurantProductsArgs } from "./args/RestaurantProductsArgs";
import { RestaurantScheduleArgs } from "./args/RestaurantScheduleArgs";
import { RestaurantUsersArgs } from "./args/RestaurantUsersArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Restaurant)
export class RestaurantRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Schedule], {
    nullable: false
  })
  async schedule(@TypeGraphQL.Root() restaurant: Restaurant, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: RestaurantScheduleArgs): Promise<Schedule[]> {
    return getPrismaFromContext(ctx).restaurant.findUnique({
      where: {
        id: restaurant.id,
      },
    }).schedule(args);
  }

  @TypeGraphQL.FieldResolver(_type => [DeliveryZone], {
    nullable: false
  })
  async deliveryZones(@TypeGraphQL.Root() restaurant: Restaurant, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: RestaurantDeliveryZonesArgs): Promise<DeliveryZone[]> {
    return getPrismaFromContext(ctx).restaurant.findUnique({
      where: {
        id: restaurant.id,
      },
    }).deliveryZones(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Customer], {
    nullable: false
  })
  async customers(@TypeGraphQL.Root() restaurant: Restaurant, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: RestaurantCustomersArgs): Promise<Customer[]> {
    return getPrismaFromContext(ctx).restaurant.findUnique({
      where: {
        id: restaurant.id,
      },
    }).customers(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Order], {
    nullable: false
  })
  async orders(@TypeGraphQL.Root() restaurant: Restaurant, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: RestaurantOrdersArgs): Promise<Order[]> {
    return getPrismaFromContext(ctx).restaurant.findUnique({
      where: {
        id: restaurant.id,
      },
    }).orders(args);
  }

  @TypeGraphQL.FieldResolver(_type => [ProductCategory], {
    nullable: false
  })
  async productCategory(@TypeGraphQL.Root() restaurant: Restaurant, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: RestaurantProductCategoryArgs): Promise<ProductCategory[]> {
    return getPrismaFromContext(ctx).restaurant.findUnique({
      where: {
        id: restaurant.id,
      },
    }).productCategory(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Product], {
    nullable: false
  })
  async products(@TypeGraphQL.Root() restaurant: Restaurant, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: RestaurantProductsArgs): Promise<Product[]> {
    return getPrismaFromContext(ctx).restaurant.findUnique({
      where: {
        id: restaurant.id,
      },
    }).products(args);
  }

  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async users(@TypeGraphQL.Root() restaurant: Restaurant, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: RestaurantUsersArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).restaurant.findUnique({
      where: {
        id: restaurant.id,
      },
    }).users(args);
  }
}
