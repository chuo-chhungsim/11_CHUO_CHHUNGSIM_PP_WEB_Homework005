/*
  Warnings:

  - You are about to drop the `tblStudent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "tblStudent";

-- CreateTable
CREATE TABLE "student" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "student_email_key" ON "student"("email");
