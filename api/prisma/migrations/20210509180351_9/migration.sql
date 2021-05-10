/*
  Warnings:

  - You are about to drop the column `charges` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `orderId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `CartElement` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrderElement` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `total` on table `Order` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "CartElement" DROP CONSTRAINT "CartElement_customerId_fkey";

-- DropForeignKey
ALTER TABLE "CartElement" DROP CONSTRAINT "CartElement_productId_fkey";

-- DropForeignKey
ALTER TABLE "OrderElement" DROP CONSTRAINT "OrderElement_orderId_fkey";

-- DropForeignKey
ALTER TABLE "OrderElement" DROP CONSTRAINT "OrderElement_productCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_orderId_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "charges",
ALTER COLUMN "total" SET NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "orderId";

-- DropTable
DROP TABLE "CartElement";

-- DropTable
DROP TABLE "OrderElement";

-- CreateTable
CREATE TABLE "Cart" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "orderId" INTEGER,
    "productId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cart" ADD FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;
