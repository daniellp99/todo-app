-- AlterTable
ALTER TABLE "Todo" ALTER COLUMN "complete" DROP NOT NULL,
ALTER COLUMN "complete" SET DEFAULT false;
