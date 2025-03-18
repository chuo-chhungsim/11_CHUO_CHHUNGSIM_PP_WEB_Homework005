-- CreateTable
CREATE TABLE "tblStudent" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "tblStudent_pkey" PRIMARY KEY ("id")
);
