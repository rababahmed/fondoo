import { RestaurantCreateNestedManyWithoutPlanInput } from "../inputs/RestaurantCreateNestedManyWithoutPlanInput";
export declare class RestaurantPlanCreateInput {
    id?: string | undefined;
    name: string;
    price: number;
    isActive: boolean;
    restaurants?: RestaurantCreateNestedManyWithoutPlanInput | undefined;
}
