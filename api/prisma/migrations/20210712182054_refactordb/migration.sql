/*
  Warnings:

  - Made the column `restaurantId` on table `DeliveryZone` required. This step will fail if there are existing NULL values in that column.
  - Made the column `restaurantId` on table `Schedule` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "DeliveryZone" ALTER COLUMN "restaurantId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Schedule" ALTER COLUMN "restaurantId" SET NOT NULL;
