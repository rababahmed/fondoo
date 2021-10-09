/*
  Warnings:

  - The `vat` column on the `Restaurant` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `serviceCharge` column on the `Restaurant` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Restaurant" DROP COLUMN "vat",
ADD COLUMN     "vat" DOUBLE PRECISION,
DROP COLUMN "serviceCharge",
ADD COLUMN     "serviceCharge" DOUBLE PRECISION;
