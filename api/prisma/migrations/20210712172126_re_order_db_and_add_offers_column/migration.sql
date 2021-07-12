/*
  Warnings:

  - You are about to drop the column `zonePostCode` on the `DeliveryZone` table. All the data in the column will be lost.
  - You are about to drop the column `zoneTitle` on the `DeliveryZone` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `deliveryCharges` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `restaurantConfigId` on the `Restaurant` table. All the data in the column will be lost.
  - You are about to drop the `CustomerToken` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserToken` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[restaurantId]` on the table `RestaurantConfig` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[restaurantId]` on the table `RestaurantSocial` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[restaurantId]` on the table `CMSHome` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[restaurantId]` on the table `CMSAbout` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[restaurantId]` on the table `CMSReview` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[restaurantId]` on the table `CMSReservation` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[restaurantId]` on the table `CMSContact` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `restaurantId` to the `CMSAbout` table without a default value. This is not possible if the table is not empty.
  - Added the required column `restaurantId` to the `CMSContact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `restaurantId` to the `CMSHome` table without a default value. This is not possible if the table is not empty.
  - Added the required column `restaurantId` to the `CMSReservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `restaurantId` to the `CMSReview` table without a default value. This is not possible if the table is not empty.
  - Added the required column `restaurantId` to the `Coupon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Coupon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `DeliveryZone` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deliveryCharge` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Made the column `orderId` on table `OrderItem` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `restaurantId` to the `RestaurantConfig` table without a default value. This is not possible if the table is not empty.
  - Added the required column `restaurantId` to the `RestaurantSocial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `RestaurantSocial` table without a default value. This is not possible if the table is not empty.
  - Made the column `phone` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "CustomerToken" DROP CONSTRAINT "CustomerToken_customerId_fkey";

-- DropForeignKey
ALTER TABLE "UserToken" DROP CONSTRAINT "UserToken_userId_fkey";

-- DropForeignKey
ALTER TABLE "Restaurant" DROP CONSTRAINT "Restaurant_cMSAboutId_fkey";

-- DropForeignKey
ALTER TABLE "Restaurant" DROP CONSTRAINT "Restaurant_cMSContactId_fkey";

-- DropForeignKey
ALTER TABLE "Restaurant" DROP CONSTRAINT "Restaurant_cMSHomeId_fkey";

-- DropForeignKey
ALTER TABLE "Restaurant" DROP CONSTRAINT "Restaurant_cMSReservationId_fkey";

-- DropForeignKey
ALTER TABLE "Restaurant" DROP CONSTRAINT "Restaurant_cMSReviewId_fkey";

-- DropForeignKey
ALTER TABLE "Restaurant" DROP CONSTRAINT "Restaurant_restaurantConfigId_fkey";

-- DropForeignKey
ALTER TABLE "Restaurant" DROP CONSTRAINT "Restaurant_restaurantSocialId_fkey";

-- AlterTable
ALTER TABLE "CMSAbout" ADD COLUMN     "restaurantId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "CMSContact" ADD COLUMN     "restaurantId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "CMSHome" ADD COLUMN     "restaurantId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "CMSReservation" ADD COLUMN     "restaurantId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "CMSReview" ADD COLUMN     "restaurantId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Coupon" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "restaurantId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "DeliveryZone" DROP COLUMN "zonePostCode",
DROP COLUMN "zoneTitle",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "postCode" TEXT;

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "address",
DROP COLUMN "deliveryCharges",
ADD COLUMN     "customerAddressId" TEXT,
ADD COLUMN     "deliveryCharge" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "offerId" TEXT;

-- AlterTable
ALTER TABLE "OrderItem" ALTER COLUMN "orderId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Restaurant" DROP COLUMN "restaurantConfigId",
ALTER COLUMN "restaurantSocialId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "RestaurantConfig" ADD COLUMN     "restaurantId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "RestaurantSocial" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "restaurantId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "phone" SET NOT NULL;

-- DropTable
DROP TABLE "CustomerToken";

-- DropTable
DROP TABLE "UserToken";

-- CreateTable
CREATE TABLE "Offer" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "restaurantId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RestaurantConfig_restaurantId_unique" ON "RestaurantConfig"("restaurantId");

-- CreateIndex
CREATE UNIQUE INDEX "RestaurantSocial_restaurantId_unique" ON "RestaurantSocial"("restaurantId");

-- CreateIndex
CREATE UNIQUE INDEX "CMSHome_restaurantId_unique" ON "CMSHome"("restaurantId");

-- CreateIndex
CREATE UNIQUE INDEX "CMSAbout_restaurantId_unique" ON "CMSAbout"("restaurantId");

-- CreateIndex
CREATE UNIQUE INDEX "CMSReview_restaurantId_unique" ON "CMSReview"("restaurantId");

-- CreateIndex
CREATE UNIQUE INDEX "CMSReservation_restaurantId_unique" ON "CMSReservation"("restaurantId");

-- CreateIndex
CREATE UNIQUE INDEX "CMSContact_restaurantId_unique" ON "CMSContact"("restaurantId");

-- CreateIndex
CREATE UNIQUE INDEX "Customer.phone_unique" ON "Customer"("phone");

-- AddForeignKey
ALTER TABLE "Offer" ADD FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coupon" ADD FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CMSAbout" ADD FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CMSContact" ADD FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CMSHome" ADD FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestaurantConfig" ADD FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD FOREIGN KEY ("customerAddressId") REFERENCES "CustomerAddress"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD FOREIGN KEY ("offerId") REFERENCES "Offer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestaurantSocial" ADD FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CMSReview" ADD FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CMSReservation" ADD FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
