/*
  Warnings:

  - You are about to drop the column `isPopular` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `domain` on the `RestaurantConfig` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ProductCategory` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `RestaurantConfig_domain_key` ON `RestaurantConfig`;

-- AlterTable
ALTER TABLE `Product` DROP COLUMN `isPopular`,
    ADD COLUMN `isFeatured` BOOLEAN NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `ProductCategory` ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `RestaurantConfig` DROP COLUMN `domain`;

-- CreateTable
CREATE TABLE `Domain` (
    `id` VARCHAR(191) NOT NULL,
    `domain` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `restaurantConfigId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
