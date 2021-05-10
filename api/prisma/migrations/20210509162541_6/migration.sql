-- CreateTable
CREATE TABLE "TestOrder" (
    "id" SERIAL NOT NULL,
    "items" JSONB NOT NULL,
    "total" INTEGER,
    "isAccepted" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "restaurantId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TestOrder" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestOrder" ADD FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
