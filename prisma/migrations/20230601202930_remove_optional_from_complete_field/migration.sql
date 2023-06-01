/*
  Warnings:

  - Made the column `complete` on table `Todo` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Todo" ALTER COLUMN "complete" SET NOT NULL;
