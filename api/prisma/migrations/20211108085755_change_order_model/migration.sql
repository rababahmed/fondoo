/*
  Warnings:

  - You are about to drop the column `isAccepted` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Domain` ADD COLUMN `restaurantId` VARCHAR(191);

-- AlterTable
ALTER TABLE `Order` DROP COLUMN `isAccepted`,
    ADD COLUMN `status` ENUM('Pending', 'Confirmed', 'Cancelled', 'Completed') DEFAULT 'Pending';
