import { CustomerCreateOrConnectWithoutCartInput } from "../inputs/CustomerCreateOrConnectWithoutCartInput";
import { CustomerCreateWithoutCartInput } from "../inputs/CustomerCreateWithoutCartInput";
import { CustomerUpdateWithoutCartInput } from "../inputs/CustomerUpdateWithoutCartInput";
import { CustomerUpsertWithoutCartInput } from "../inputs/CustomerUpsertWithoutCartInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";
export declare class CustomerUpdateOneRequiredWithoutCartInput {
    create?: CustomerCreateWithoutCartInput | undefined;
    connectOrCreate?: CustomerCreateOrConnectWithoutCartInput | undefined;
    upsert?: CustomerUpsertWithoutCartInput | undefined;
    connect?: CustomerWhereUniqueInput | undefined;
    update?: CustomerUpdateWithoutCartInput | undefined;
}
