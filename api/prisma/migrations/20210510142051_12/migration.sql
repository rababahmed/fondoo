/*
  Warnings:

  - You are about to drop the `Cart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TestOrder` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `items` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deliveryCharges` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vat` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serviceCharge` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Made the column `isAccepted` on table `Order` required. This step will fail if there are existing NULL values in that column.
  - Made the column `restaurantId` on table `Order` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_orderId_fkey";

-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_productId_fkey";

-- DropForeignKey
ALTER TABLE "TestOrder" DROP CONSTRAINT "TestOrder_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "TestOrder" DROP CONSTRAINT "TestOrder_userId_fkey";

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "items" JSONB NOT NULL,
ADD COLUMN     "coupon" TEXT,
ADD COLUMN     "deliveryCharges" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "vat" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "serviceCharge" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL,
ALTER COLUMN "total" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "isAccepted" SET NOT NULL,
ALTER COLUMN "restaurantId" SET NOT NULL,
ALTER COLUMN "customerAddressId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "username" TEXT NOT NULL;

-- DropTable
DROP TABLE "Cart";

-- DropTable
DROP TABLE "TestOrder";

-- CreateIndex
CREATE UNIQUE INDEX "User.username_unique" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Order" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
