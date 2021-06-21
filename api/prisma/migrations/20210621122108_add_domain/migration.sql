/*
  Warnings:

  - A unique constraint covering the columns `[domain]` on the table `RestaurantConfig` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `domain` to the `RestaurantConfig` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Restaurant" ALTER COLUMN "email" DROP NOT NULL;

-- AlterTable
ALTER TABLE "RestaurantConfig" ADD COLUMN     "domain" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "RestaurantConfig.domain_unique" ON "RestaurantConfig"("domain");
