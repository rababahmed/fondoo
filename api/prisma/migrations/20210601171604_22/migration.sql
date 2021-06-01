/*
  Warnings:

  - The `deliveryTime` column on the `Schedule` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `takeawayTime` column on the `Schedule` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Schedule" DROP COLUMN "deliveryTime",
ADD COLUMN     "deliveryTime" INTEGER,
DROP COLUMN "takeawayTime",
ADD COLUMN     "takeawayTime" INTEGER;
