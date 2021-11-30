-- AlterTable
ALTER TABLE `RestaurantPlan` ADD COLUMN `paddleId` VARCHAR(191),
    MODIFY `isActive` BOOLEAN;

-- CreateTable
CREATE TABLE `Subscription` (
    `id` VARCHAR(191) NOT NULL,
    `paddleSubscriptionId` VARCHAR(191),
    `paddleCancelUrl` VARCHAR(191),
    `paddleUpdateUrl` VARCHAR(191),
    `restaurantId` VARCHAR(191) NOT NULL,
    `restaurantPlanId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Subscription_restaurantId_key`(`restaurantId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
