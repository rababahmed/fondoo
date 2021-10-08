/*
  Warnings:

  - You are about to drop the column `navBarAccentColor` on the `RestaurantConfig` table. All the data in the column will be lost.
  - You are about to drop the column `navBarBgColor` on the `RestaurantConfig` table. All the data in the column will be lost.
  - You are about to drop the column `topRibbonAccentColor` on the `RestaurantConfig` table. All the data in the column will be lost.
  - You are about to drop the column `topRibbonBgColor` on the `RestaurantConfig` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "RestaurantConfig" DROP COLUMN "navBarAccentColor",
DROP COLUMN "navBarBgColor",
DROP COLUMN "topRibbonAccentColor",
DROP COLUMN "topRibbonBgColor",
ADD COLUMN     "hasDarkNavBg" BOOLEAN;

-- AlterIndex
ALTER INDEX "CMSReservation_restaurantId_unique" RENAME TO "CMSReservation.restaurantId_unique";

-- AlterIndex
ALTER INDEX "CMSContact_restaurantId_unique" RENAME TO "CMSContact.restaurantId_unique";

-- AlterIndex
ALTER INDEX "CMSAbout_restaurantId_unique" RENAME TO "CMSAbout.restaurantId_unique";

-- AlterIndex
ALTER INDEX "RestaurantConfig_restaurantId_unique" RENAME TO "RestaurantConfig.restaurantId_unique";

-- AlterIndex
ALTER INDEX "CMSReview_restaurantId_unique" RENAME TO "CMSReview.restaurantId_unique";

-- AlterIndex
ALTER INDEX "CMSHome_restaurantId_unique" RENAME TO "CMSHome.restaurantId_unique";

-- AlterIndex
ALTER INDEX "RestaurantSocial_restaurantId_unique" RENAME TO "RestaurantSocial.restaurantId_unique";
