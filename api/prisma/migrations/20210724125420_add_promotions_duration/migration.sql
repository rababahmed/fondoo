/*
  Warnings:

  - You are about to drop the column `heroAccentColor` on the `RestaurantConfig` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Coupon" ADD COLUMN     "endDate" TIMESTAMP(3),
ADD COLUMN     "startDate" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Offer" ADD COLUMN     "endDate" TIMESTAMP(3),
ADD COLUMN     "startDate" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "RestaurantConfig" DROP COLUMN "heroAccentColor";
