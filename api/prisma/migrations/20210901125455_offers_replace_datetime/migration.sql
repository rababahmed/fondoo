-- AlterTable
ALTER TABLE "Offer" ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "isActive" DROP NOT NULL,
ALTER COLUMN "endDate" SET DATA TYPE TEXT,
ALTER COLUMN "startDate" SET DATA TYPE TEXT;
