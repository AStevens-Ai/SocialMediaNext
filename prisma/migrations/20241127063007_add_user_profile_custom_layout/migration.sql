/*
  Warnings:

  - You are about to drop the column `customCSS` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `customHTML` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "customCSS",
DROP COLUMN "customHTML",
ADD COLUMN     "customLayout" TEXT;
