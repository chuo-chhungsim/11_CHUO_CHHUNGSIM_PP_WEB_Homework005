import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const studentData = [
  {
    name: "monster",
    email: "monster@gmail.com",
  },
  {
    name: "monster1",
    email: "monster1@gmail.com",
  },
  {
    name: "monster2",
    email: "monster2@gmail.com",
  },
];

export async function addInitialData() {
  for (const s of studentData) {
    await prisma.tblStudent.create({ data: s });
  }
}

addInitialData();
