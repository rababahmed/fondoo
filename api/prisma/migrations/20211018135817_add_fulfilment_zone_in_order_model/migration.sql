-- DropForeignKey
ALTER TABLE "CMSAbout" DROP CONSTRAINT "CMSAbout_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "CMSContact" DROP CONSTRAINT "CMSContact_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "CMSHome" DROP CONSTRAINT "CMSHome_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "CMSReservation" DROP CONSTRAINT "CMSReservation_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "CMSReview" DROP CONSTRAINT "CMSReview_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "Coupon" DROP CONSTRAINT "Coupon_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "DeliveryZone" DROP CONSTRAINT "DeliveryZone_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "Offer" DROP CONSTRAINT "Offer_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_orderId_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_productId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_productCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "ProductCategory" DROP CONSTRAINT "ProductCategory_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "Restaurant" DROP CONSTRAINT "Restaurant_restaurantPlanId_fkey";

-- DropForeignKey
ALTER TABLE "RestaurantConfig" DROP CONSTRAINT "RestaurantConfig_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "RestaurantReview" DROP CONSTRAINT "RestaurantReview_customerId_fkey";

-- DropForeignKey
ALTER TABLE "RestaurantReview" DROP CONSTRAINT "RestaurantReview_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "RestaurantSocial" DROP CONSTRAINT "RestaurantSocial_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "Schedule" DROP CONSTRAINT "Schedule_restaurantId_fkey";

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "deliveryZoneId" TEXT,
ADD COLUMN     "isPreOrder" BOOLEAN;

-- AddForeignKey
ALTER TABLE "Restaurant" ADD CONSTRAINT "Restaurant_restaurantPlanId_fkey" FOREIGN KEY ("restaurantPlanId") REFERENCES "RestaurantPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestaurantConfig" ADD CONSTRAINT "RestaurantConfig_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestaurantSocial" ADD CONSTRAINT "RestaurantSocial_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestaurantReview" ADD CONSTRAINT "RestaurantReview_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestaurantReview" ADD CONSTRAINT "RestaurantReview_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CMSHome" ADD CONSTRAINT "CMSHome_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CMSAbout" ADD CONSTRAINT "CMSAbout_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CMSReview" ADD CONSTRAINT "CMSReview_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CMSReservation" ADD CONSTRAINT "CMSReservation_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CMSContact" ADD CONSTRAINT "CMSContact_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductCategory" ADD CONSTRAINT "ProductCategory_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_productCategoryId_fkey" FOREIGN KEY ("productCategoryId") REFERENCES "ProductCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeliveryZone" ADD CONSTRAINT "DeliveryZone_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Offer" ADD CONSTRAINT "Offer_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coupon" ADD CONSTRAINT "Coupon_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_deliveryZoneId_fkey" FOREIGN KEY ("deliveryZoneId") REFERENCES "DeliveryZone"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "CMSAbout.restaurantId_unique" RENAME TO "CMSAbout_restaurantId_key";

-- RenameIndex
ALTER INDEX "CMSContact.restaurantId_unique" RENAME TO "CMSContact_restaurantId_key";

-- RenameIndex
ALTER INDEX "CMSHome.restaurantId_unique" RENAME TO "CMSHome_restaurantId_key";

-- RenameIndex
ALTER INDEX "CMSReservation.restaurantId_unique" RENAME TO "CMSReservation_restaurantId_key";

-- RenameIndex
ALTER INDEX "CMSReview.restaurantId_unique" RENAME TO "CMSReview_restaurantId_key";

-- RenameIndex
ALTER INDEX "Customer.email_unique" RENAME TO "Customer_email_key";

-- RenameIndex
ALTER INDEX "Customer.phone_unique" RENAME TO "Customer_phone_key";

-- RenameIndex
ALTER INDEX "RestaurantConfig.domain_unique" RENAME TO "RestaurantConfig_domain_key";

-- RenameIndex
ALTER INDEX "RestaurantConfig.restaurantId_unique" RENAME TO "RestaurantConfig_restaurantId_key";

-- RenameIndex
ALTER INDEX "RestaurantSocial.restaurantId_unique" RENAME TO "RestaurantSocial_restaurantId_key";

-- RenameIndex
ALTER INDEX "User.email_unique" RENAME TO "User_email_key";
