/*
  Warnings:

  - You are about to drop the `CMSReviews` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RestaurantReviews` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CMSReviews" DROP CONSTRAINT "CMSReviews_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "RestaurantReviews" DROP CONSTRAINT "RestaurantReviews_customerId_fkey";

-- DropForeignKey
ALTER TABLE "RestaurantReviews" DROP CONSTRAINT "RestaurantReviews_restaurantId_fkey";

-- DropTable
DROP TABLE "CMSReviews";

-- DropTable
DROP TABLE "RestaurantReviews";

-- CreateTable
CREATE TABLE "RestaurantReview" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rating" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "restaurantId" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CMSReview" (
    "id" TEXT NOT NULL,
    "headerHeading" TEXT,
    "headerDescription" TEXT,
    "headerImage" TEXT,
    "isActive" BOOLEAN,
    "restaurantId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CMSReview" ADD FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestaurantReview" ADD FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestaurantReview" ADD FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
