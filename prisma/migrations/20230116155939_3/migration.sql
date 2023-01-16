/*
  Warnings:

  - You are about to drop the `_RamenShopToReview` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_RamenShopToReview" DROP CONSTRAINT "_RamenShopToReview_A_fkey";

-- DropForeignKey
ALTER TABLE "_RamenShopToReview" DROP CONSTRAINT "_RamenShopToReview_B_fkey";

-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "shopId" TEXT;

-- DropTable
DROP TABLE "_RamenShopToReview";

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "RamenShop"("id") ON DELETE SET NULL ON UPDATE CASCADE;
