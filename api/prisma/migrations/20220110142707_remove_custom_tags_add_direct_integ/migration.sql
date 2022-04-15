/*
  Warnings:

  - You are about to drop the column `customFooterTags` on the `RestaurantConfig` table. All the data in the column will be lost.
  - You are about to drop the column `customHeaderTags` on the `RestaurantConfig` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `RestaurantConfig` DROP COLUMN `customFooterTags`,
    DROP COLUMN `customHeaderTags`,
    ADD COLUMN `facebookPixelCode` VARCHAR(191),
    ADD COLUMN `googleAnalyticsCode` VARCHAR(191);
