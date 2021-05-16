import { RestaurantUncheckedCreateInput } from "../../../inputs/RestaurantUncheckedCreateInput";
import { RestaurantUncheckedUpdateInput } from "../../../inputs/RestaurantUncheckedUpdateInput";
import { RestaurantWhereUniqueInput } from "../../../inputs/RestaurantWhereUniqueInput";
export declare class UpsertRestaurantArgs {
    where: RestaurantWhereUniqueInput;
    create: RestaurantUncheckedCreateInput;
    update: RestaurantUncheckedUpdateInput;
}
