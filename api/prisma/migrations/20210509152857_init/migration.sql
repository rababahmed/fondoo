-- CreateEnum
CREATE TYPE "SpiceLevel" AS ENUM ('None', 'Mild', 'Medium', 'Hot', 'ExtraHot');

-- CreateEnum
CREATE TYPE "DeliveryFee" AS ENUM ('Fixed', 'Percent');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Manager', 'Owner', 'Admin', 'SuperAdmin');

-- CreateTable
CREATE TABLE "Restaurant" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "businessPhone" TEXT,
    "reservationPhone" TEXT,
    "url" TEXT,
    "address" TEXT,
    "city" TEXT,
    "postCode" TEXT,
    "country" TEXT,
    "currency" TEXT,
    "priceRange" TEXT,
    "diningStyle" TEXT,
    "vat" TEXT,
    "serviceCharge" TEXT,
    "hasParking" BOOLEAN,
    "hasPartyFacilities" BOOLEAN,
    "hasKidsZone" BOOLEAN,
    "isTakeaway" BOOLEAN,
    "isDelivery" BOOLEAN,
    "isReservation" BOOLEAN,
    "isOrdering" BOOLEAN,
    "isAutoAcceptOrder" BOOLEAN,
    "isAutoAcceptReservation" BOOLEAN,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductCategory" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "isActive" BOOLEAN,
    "isFeatured" BOOLEAN,
    "restaurantId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "price" INTEGER,
    "spiceLevel" "SpiceLevel" NOT NULL DEFAULT E'None',
    "isPopular" BOOLEAN,
    "isActive" BOOLEAN,
    "restaurantId" TEXT,
    "orderId" INTEGER,
    "productCategoryId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CartElement" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "customerId" INTEGER NOT NULL,
    "productId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderElement" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT,
    "price" INTEGER NOT NULL,
    "addonText" TEXT,
    "orderId" INTEGER,
    "productCategoryId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "charges" INTEGER,
    "total" INTEGER,
    "isAccepted" BOOLEAN,
    "restaurantId" TEXT,
    "customerId" INTEGER,
    "customerAddressId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Schedule" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "openingTime" TEXT,
    "closingTime" TEXT,
    "minDeliveryAmount" INTEGER,
    "deliveryTime" TEXT,
    "takeawayTime" TEXT,
    "restaurantId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeliveryZone" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "zoneTitle" TEXT NOT NULL,
    "zonePostCode" TEXT,
    "deliveryFeeType" "DeliveryFee" NOT NULL DEFAULT E'Fixed',
    "deliveryCharge" INTEGER NOT NULL DEFAULT 0,
    "minDeliveryAmount" INTEGER,
    "minDeliveryRadius" INTEGER,
    "maxDeliveryRadius" INTEGER,
    "restaurantId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "restaurantId" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomerAddress" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "streetAddress" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "postCode" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "customerId" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomerToken" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "customerId" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT,
    "role" "Role" NOT NULL DEFAULT E'Manager',
    "restaurantId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserToken" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OrderElement.code_unique" ON "OrderElement"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Customer.email_unique" ON "Customer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- AddForeignKey
ALTER TABLE "ProductCategory" ADD FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD FOREIGN KEY ("productCategoryId") REFERENCES "ProductCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartElement" ADD FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartElement" ADD FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderElement" ADD FOREIGN KEY ("productCategoryId") REFERENCES "ProductCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderElement" ADD FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD FOREIGN KEY ("customerAddressId") REFERENCES "CustomerAddress"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedule" ADD FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeliveryZone" ADD FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Customer" ADD FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerAddress" ADD FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerToken" ADD FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserToken" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
