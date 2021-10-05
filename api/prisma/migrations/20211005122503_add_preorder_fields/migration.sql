/*
  Warnings:

  - You are about to drop the column `deliveryTime` on the `Schedule` table. All the data in the column will be lost.
  - You are about to drop the column `takeawayTime` on the `Schedule` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "DeliveryZone" ADD COLUMN     "deliveryTime" INTEGER,
ADD COLUMN     "isPreOrder" BOOLEAN,
ADD COLUMN     "preOrderInstructions" TEXT,
ALTER COLUMN "deliveryCharge" SET DEFAULT 0,
ALTER COLUMN "deliveryCharge" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "minDeliveryAmount" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "minDeliveryRadius" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "maxDeliveryRadius" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Schedule" DROP COLUMN "deliveryTime",
DROP COLUMN "takeawayTime";
