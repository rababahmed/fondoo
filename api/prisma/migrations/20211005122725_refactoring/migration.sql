/*
  Warnings:

  - You are about to drop the column `isDelivery` on the `Restaurant` table. All the data in the column will be lost.
  - You are about to drop the column `isReservation` on the `Restaurant` table. All the data in the column will be lost.
  - You are about to drop the column `isTakeaway` on the `Restaurant` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Restaurant" DROP COLUMN "isDelivery",
DROP COLUMN "isReservation",
DROP COLUMN "isTakeaway",
ADD COLUMN     "hasDelivery" BOOLEAN,
ADD COLUMN     "hasPickup" BOOLEAN,
ADD COLUMN     "hasReservation" BOOLEAN;

-- AlterTable
ALTER TABLE "Schedule" ADD COLUMN     "pickupTime" INTEGER;
