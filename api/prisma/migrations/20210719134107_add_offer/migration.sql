/*
  Warnings:

  - Added the required column `isActive` to the `Offer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Offer" ADD COLUMN     "isActive" BOOLEAN NOT NULL;
