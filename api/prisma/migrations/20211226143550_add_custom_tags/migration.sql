-- AlterTable
ALTER TABLE `RestaurantConfig` ADD COLUMN `customFooterTags` VARCHAR(512),
    ADD COLUMN `customHeaderTags` VARCHAR(512),
    MODIFY `isActive` BOOLEAN;
