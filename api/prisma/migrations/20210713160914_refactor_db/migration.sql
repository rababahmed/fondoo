/*
  Warnings:

  - Made the column `restaurantPlanId` on table `Restaurant` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Restaurant" ALTER COLUMN "restaurantPlanId" SET NOT NULL,
ALTER COLUMN "cMSAboutId" DROP NOT NULL,
ALTER COLUMN "cMSContactId" DROP NOT NULL,
ALTER COLUMN "cMSHomeId" DROP NOT NULL,
ALTER COLUMN "cMSReservationId" DROP NOT NULL,
ALTER COLUMN "cMSReviewId" DROP NOT NULL;
