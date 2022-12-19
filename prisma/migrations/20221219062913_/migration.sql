/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Review` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_authorId_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "Review_title_key" ON "Review"("title");

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("email") ON DELETE SET NULL ON UPDATE CASCADE;
