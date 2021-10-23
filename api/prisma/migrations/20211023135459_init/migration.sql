-- CreateTable
CREATE TABLE `Restaurant` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191),
    `logo` VARCHAR(512),
    `coverImage` VARCHAR(512),
    `restaurantPlanId` VARCHAR(191) NOT NULL,
    `businessPhone` VARCHAR(191),
    `reservationPhone` VARCHAR(191),
    `url` VARCHAR(191),
    `cuisine` VARCHAR(191),
    `address` VARCHAR(512),
    `city` VARCHAR(191),
    `postCode` VARCHAR(191),
    `country` VARCHAR(191),
    `currency` VARCHAR(191),
    `priceRange` VARCHAR(191),
    `diningStyle` VARCHAR(191),
    `vat` DOUBLE,
    `serviceCharge` DOUBLE,
    `hasParkingFacilities` BOOLEAN,
    `hasPartyFacilities` BOOLEAN,
    `hasKidsZone` BOOLEAN,
    `hasPickup` BOOLEAN,
    `hasDelivery` BOOLEAN,
    `hasReservation` BOOLEAN,
    `isAutoAcceptOrder` BOOLEAN,
    `isAutoAcceptReservation` BOOLEAN,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RestaurantPlan` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `isActive` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RestaurantConfig` (
    `id` VARCHAR(191) NOT NULL,
    `domain` VARCHAR(191) NOT NULL,
    `primaryColor` VARCHAR(191) NOT NULL,
    `secondaryColor` VARCHAR(191) NOT NULL,
    `isActive` BOOLEAN NOT NULL,
    `hasDarkNavBg` BOOLEAN,
    `restaurantId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `RestaurantConfig_domain_key`(`domain`),
    UNIQUE INDEX `RestaurantConfig_restaurantId_key`(`restaurantId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RestaurantSocial` (
    `id` VARCHAR(191) NOT NULL,
    `network` VARCHAR(191),
    `url` VARCHAR(191),
    `isActive` BOOLEAN,
    `restaurantId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `RestaurantSocial_restaurantId_key`(`restaurantId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RestaurantReview` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(512) NOT NULL,
    `rating` INTEGER NOT NULL,
    `isActive` BOOLEAN NOT NULL,
    `customerId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `restaurantId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CMSHome` (
    `id` VARCHAR(191) NOT NULL,
    `heroHeading` VARCHAR(191),
    `heroDescription` VARCHAR(191),
    `heroImage` VARCHAR(512),
    `aboutHeading` VARCHAR(191),
    `aboutDescription` VARCHAR(191),
    `aboutImage` VARCHAR(512),
    `dealsHeading` VARCHAR(191),
    `dealsDescription` VARCHAR(191),
    `dealsImage` VARCHAR(512),
    `reservationHeading` VARCHAR(191),
    `reservationDescription` VARCHAR(191),
    `reservationImage` VARCHAR(512),
    `popularDishesHeading` VARCHAR(191),
    `popularDishesDescription` VARCHAR(191),
    `popularDishesImage` VARCHAR(512),
    `isActive` BOOLEAN,
    `restaurantId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `CMSHome_restaurantId_key`(`restaurantId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CMSAbout` (
    `id` VARCHAR(191) NOT NULL,
    `headerHeading` VARCHAR(191),
    `headerDescription` VARCHAR(191),
    `headerImage` VARCHAR(512),
    `storyHeading` VARCHAR(191),
    `storyDescription` VARCHAR(2048),
    `storyImage` VARCHAR(512),
    `isActive` BOOLEAN,
    `restaurantId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `CMSAbout_restaurantId_key`(`restaurantId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CMSReview` (
    `id` VARCHAR(191) NOT NULL,
    `headerHeading` VARCHAR(191),
    `headerDescription` VARCHAR(191),
    `headerImage` VARCHAR(191),
    `isActive` BOOLEAN,
    `restaurantId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `CMSReview_restaurantId_key`(`restaurantId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CMSReservation` (
    `id` VARCHAR(191) NOT NULL,
    `headerHeading` VARCHAR(191),
    `headerDescription` VARCHAR(191),
    `headerImage` VARCHAR(191),
    `isActive` BOOLEAN,
    `restaurantId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `CMSReservation_restaurantId_key`(`restaurantId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CMSContact` (
    `id` VARCHAR(191) NOT NULL,
    `headerHeading` VARCHAR(191),
    `headerDescription` VARCHAR(191),
    `headerImage` VARCHAR(191),
    `isActive` BOOLEAN,
    `restaurantId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `CMSContact_restaurantId_key`(`restaurantId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductCategory` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(512),
    `image` VARCHAR(512),
    `isActive` BOOLEAN,
    `isFeatured` BOOLEAN,
    `restaurantId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(512),
    `image` VARCHAR(512),
    `price` DOUBLE,
    `spiceLevel` ENUM('None', 'Mild', 'Medium', 'Hot', 'ExtraHot') NOT NULL DEFAULT 'None',
    `isPopular` BOOLEAN,
    `isActive` BOOLEAN,
    `productCategoryId` VARCHAR(191),
    `restaurantId` VARCHAR(191),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Schedule` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `day` VARCHAR(191),
    `openingTime` VARCHAR(191),
    `closingTime` VARCHAR(191),
    `pickupTime` INTEGER,
    `restaurantId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DeliveryZone` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `name` VARCHAR(191) NOT NULL,
    `deliveryTime` INTEGER,
    `isPreOrder` BOOLEAN,
    `preOrderInstructions` VARCHAR(191),
    `postCode` VARCHAR(191),
    `deliveryFeeType` ENUM('Fixed', 'Percent') NOT NULL DEFAULT 'Fixed',
    `deliveryCharge` DOUBLE NOT NULL DEFAULT 0,
    `minDeliveryAmount` DOUBLE,
    `minDeliveryRadius` DOUBLE,
    `maxDeliveryRadius` DOUBLE,
    `restaurantId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Customer` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Customer_email_key`(`email`),
    UNIQUE INDEX `Customer_phone_key`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CustomerAddress` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `streetAddress` VARCHAR(512) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `postCode` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `customerId` VARCHAR(191),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `role` ENUM('Manager', 'Owner', 'Admin', 'SuperAdmin') NOT NULL DEFAULT 'Manager',

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Offer` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `name` VARCHAR(191),
    `description` VARCHAR(1024),
    `image` VARCHAR(512),
    `startDate` VARCHAR(191),
    `endDate` VARCHAR(191),
    `isActive` BOOLEAN,
    `restaurantId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Coupon` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `discount` ENUM('Fixed', 'Percent') NOT NULL,
    `value` DOUBLE NOT NULL,
    `image` VARCHAR(512),
    `startDate` VARCHAR(191),
    `endDate` VARCHAR(191),
    `description` VARCHAR(1024),
    `restaurantId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrderItem` (
    `id` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL DEFAULT 1,
    `total` DOUBLE NOT NULL,
    `spiceLevel` ENUM('None', 'Mild', 'Medium', 'Hot', 'ExtraHot') NOT NULL DEFAULT 'None',
    `productId` VARCHAR(191) NOT NULL,
    `orderId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `restaurantId` VARCHAR(191),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Order` (
    `id` VARCHAR(191) NOT NULL,
    `fulfilmentType` ENUM('Delivery', 'Pickup') NOT NULL,
    `discount` DOUBLE,
    `deliveryCharge` DOUBLE,
    `vat` DOUBLE,
    `serviceCharge` DOUBLE,
    `total` DOUBLE,
    `isViewed` BOOLEAN,
    `isPreOrder` BOOLEAN,
    `isAccepted` BOOLEAN,
    `couponId` VARCHAR(191),
    `offerId` VARCHAR(191),
    `restaurantId` VARCHAR(191) NOT NULL,
    `customerId` VARCHAR(191),
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deliveryZoneId` VARCHAR(191),
    `customerAddressId` VARCHAR(191),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_CustomerToRestaurant` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_CustomerToRestaurant_AB_unique`(`A`, `B`),
    INDEX `_CustomerToRestaurant_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_RestaurantToUser` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_RestaurantToUser_AB_unique`(`A`, `B`),
    INDEX `_RestaurantToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
