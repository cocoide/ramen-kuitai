/*
  Warnings:

  - You are about to drop the column `shopId` on the `Review` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_shopId_fkey";

-- AlterTable
ALTER TABLE "RamenShop" ADD COLUMN     "description" TEXT;

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "shopId";

-- CreateTable
CREATE TABLE "_RamenShopToReview" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_RamenShopToReview_AB_unique" ON "_RamenShopToReview"("A", "B");

-- CreateIndex
CREATE INDEX "_RamenShopToReview_B_index" ON "_RamenShopToReview"("B");

-- AddForeignKey
ALTER TABLE "_RamenShopToReview" ADD CONSTRAINT "_RamenShopToReview_A_fkey" FOREIGN KEY ("A") REFERENCES "RamenShop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RamenShopToReview" ADD CONSTRAINT "_RamenShopToReview_B_fkey" FOREIGN KEY ("B") REFERENCES "Review"("id") ON DELETE CASCADE ON UPDATE CASCADE;
