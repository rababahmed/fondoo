/*
  Warnings:

  - You are about to drop the `RestaurantSocials` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "RestaurantSocials" DROP CONSTRAINT "RestaurantSocials_restaurantId_fkey";

-- DropTable
DROP TABLE "RestaurantSocials";

-- CreateTable
CREATE TABLE "RestaurantSocial" (
    "id" TEXT NOT NULL,
    "facebook" TEXT NOT NULL,
    "instagram" TEXT NOT NULL,
    "pinterest" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "restaurantId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RestaurantSocial" ADD FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
