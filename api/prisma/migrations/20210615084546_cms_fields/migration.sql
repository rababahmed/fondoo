-- CreateTable
CREATE TABLE "RestaurantConfig" (
    "id" TEXT NOT NULL,
    "primaryColor" TEXT NOT NULL,
    "secondaryColor" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "restaurantId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RestaurantSocials" (
    "id" TEXT NOT NULL,
    "facebook" TEXT NOT NULL,
    "instagram" TEXT NOT NULL,
    "pinterest" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "restaurantId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RestaurantReviews" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rating" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "restaurantId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CMSHome" (
    "id" TEXT NOT NULL,
    "heroHeading" TEXT,
    "heroDescription" TEXT,
    "heroImage" TEXT,
    "aboutHeading" TEXT,
    "aboutDescription" TEXT,
    "aboutImage" TEXT,
    "dealsHeading" TEXT,
    "dealsDescription" TEXT,
    "dealsImage" TEXT,
    "reservationHeading" TEXT,
    "reservationDescription" TEXT,
    "reservationImage" TEXT,
    "popularDishesHeading" TEXT,
    "popularDishesDescription" TEXT,
    "popularDishesImage" TEXT,
    "isActive" BOOLEAN,
    "restaurantId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CMSAbout" (
    "id" TEXT NOT NULL,
    "headerHeading" TEXT,
    "headerDescription" TEXT,
    "headerImage" TEXT,
    "storyHeading" TEXT,
    "storyDescription" TEXT,
    "storyImage" TEXT,
    "isActive" BOOLEAN,
    "restaurantId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CMSReviews" (
    "id" TEXT NOT NULL,
    "headerHeading" TEXT,
    "headerDescription" TEXT,
    "headerImage" TEXT,
    "isActive" BOOLEAN,
    "restaurantId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CMSReservation" (
    "id" TEXT NOT NULL,
    "headerHeading" TEXT,
    "headerDescription" TEXT,
    "headerImage" TEXT,
    "isActive" BOOLEAN,
    "restaurantId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CMSContact" (
    "id" TEXT NOT NULL,
    "headerHeading" TEXT,
    "headerDescription" TEXT,
    "headerImage" TEXT,
    "isActive" BOOLEAN,
    "restaurantId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CMSAbout" ADD FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CMSReservation" ADD FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestaurantSocials" ADD FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CMSContact" ADD FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestaurantReviews" ADD FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CMSHome" ADD FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestaurantConfig" ADD FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CMSReviews" ADD FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
