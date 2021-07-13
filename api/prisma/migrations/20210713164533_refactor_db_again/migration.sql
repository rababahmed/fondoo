/*
  Warnings:

  - You are about to drop the column `cMSAboutId` on the `Restaurant` table. All the data in the column will be lost.
  - You are about to drop the column `cMSContactId` on the `Restaurant` table. All the data in the column will be lost.
  - You are about to drop the column `cMSHomeId` on the `Restaurant` table. All the data in the column will be lost.
  - You are about to drop the column `cMSReservationId` on the `Restaurant` table. All the data in the column will be lost.
  - You are about to drop the column `cMSReviewId` on the `Restaurant` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Restaurant" DROP COLUMN "cMSAboutId",
DROP COLUMN "cMSContactId",
DROP COLUMN "cMSHomeId",
DROP COLUMN "cMSReservationId",
DROP COLUMN "cMSReviewId";
