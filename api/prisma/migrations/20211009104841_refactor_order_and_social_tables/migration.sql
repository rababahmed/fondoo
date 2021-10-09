/*
  Warnings:

  - The primary key for the `Order` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `facebook` on the `RestaurantSocial` table. All the data in the column will be lost.
  - You are about to drop the column `instagram` on the `RestaurantSocial` table. All the data in the column will be lost.
  - You are about to drop the column `pinterest` on the `RestaurantSocial` table. All the data in the column will be lost.
  - Added the required column `fulfilmentType` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "FulfilmentType" AS ENUM ('Delivery', 'Pickup');

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_orderId_fkey";

-- AlterTable
ALTER TABLE "Coupon" ADD COLUMN     "image" TEXT;

-- AlterTable
ALTER TABLE "Offer" ADD COLUMN     "image" TEXT;

-- AlterTable
ALTER TABLE "Order" DROP CONSTRAINT "Order_pkey",
ADD COLUMN     "fulfilmentType" "FulfilmentType" NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "total" DROP NOT NULL,
ALTER COLUMN "isAccepted" DROP NOT NULL,
ALTER COLUMN "vat" DROP NOT NULL,
ALTER COLUMN "serviceCharge" DROP NOT NULL,
ALTER COLUMN "discount" DROP NOT NULL,
ALTER COLUMN "deliveryCharge" DROP NOT NULL,
ADD PRIMARY KEY ("id");
DROP SEQUENCE "Order_id_seq";

-- AlterTable
ALTER TABLE "OrderItem" ALTER COLUMN "total" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "orderId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "price" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "RestaurantSocial" DROP COLUMN "facebook",
DROP COLUMN "instagram",
DROP COLUMN "pinterest",
ADD COLUMN     "network" TEXT,
ADD COLUMN     "url" TEXT;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;
