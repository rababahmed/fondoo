/*
  Warnings:

  - You are about to drop the column `restaurantId` on the `CMSAbout` table. All the data in the column will be lost.
  - You are about to drop the column `restaurantId` on the `CMSContact` table. All the data in the column will be lost.
  - You are about to drop the column `restaurantId` on the `CMSHome` table. All the data in the column will be lost.
  - You are about to drop the column `restaurantId` on the `CMSReservation` table. All the data in the column will be lost.
  - You are about to drop the column `restaurantId` on the `CMSReview` table. All the data in the column will be lost.
  - You are about to drop the column `restaurantId` on the `RestaurantConfig` table. All the data in the column will be lost.
  - You are about to drop the column `restaurantId` on the `RestaurantSocial` table. All the data in the column will be lost.
  - Added the required column `cMSAboutId` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cMSContactId` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cMSHomeId` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cMSReservationId` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cMSReviewId` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `restaurantConfigId` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `restaurantSocialId` to the `Restaurant` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CMSAbout" DROP CONSTRAINT "CMSAbout_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "CMSHome" DROP CONSTRAINT "CMSHome_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "CMSReview" DROP CONSTRAINT "CMSReview_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "RestaurantSocial" DROP CONSTRAINT "RestaurantSocial_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "CMSContact" DROP CONSTRAINT "CMSContact_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "CMSReservation" DROP CONSTRAINT "CMSReservation_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "RestaurantConfig" DROP CONSTRAINT "RestaurantConfig_restaurantId_fkey";

-- AlterTable
ALTER TABLE "CMSAbout" DROP COLUMN "restaurantId";

-- AlterTable
ALTER TABLE "CMSContact" DROP COLUMN "restaurantId";

-- AlterTable
ALTER TABLE "CMSHome" DROP COLUMN "restaurantId";

-- AlterTable
ALTER TABLE "CMSReservation" DROP COLUMN "restaurantId";

-- AlterTable
ALTER TABLE "CMSReview" DROP COLUMN "restaurantId";

-- AlterTable
ALTER TABLE "Restaurant" ADD COLUMN     "cMSAboutId" TEXT NOT NULL,
ADD COLUMN     "cMSContactId" TEXT NOT NULL,
ADD COLUMN     "cMSHomeId" TEXT NOT NULL,
ADD COLUMN     "cMSReservationId" TEXT NOT NULL,
ADD COLUMN     "cMSReviewId" TEXT NOT NULL,
ADD COLUMN     "restaurantConfigId" TEXT NOT NULL,
ADD COLUMN     "restaurantSocialId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "RestaurantConfig" DROP COLUMN "restaurantId";

-- AlterTable
ALTER TABLE "RestaurantSocial" DROP COLUMN "restaurantId";

-- AddForeignKey
ALTER TABLE "Restaurant" ADD FOREIGN KEY ("restaurantConfigId") REFERENCES "RestaurantConfig"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Restaurant" ADD FOREIGN KEY ("restaurantSocialId") REFERENCES "RestaurantSocial"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Restaurant" ADD FOREIGN KEY ("cMSHomeId") REFERENCES "CMSHome"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Restaurant" ADD FOREIGN KEY ("cMSAboutId") REFERENCES "CMSAbout"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Restaurant" ADD FOREIGN KEY ("cMSReviewId") REFERENCES "CMSReview"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Restaurant" ADD FOREIGN KEY ("cMSReservationId") REFERENCES "CMSReservation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Restaurant" ADD FOREIGN KEY ("cMSContactId") REFERENCES "CMSContact"("id") ON DELETE CASCADE ON UPDATE CASCADE;
