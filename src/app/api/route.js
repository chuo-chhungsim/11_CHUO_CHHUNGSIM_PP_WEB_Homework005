import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// Get method
export const GET = async () => {
  const studentList = await prisma.tblStudent.findMany();
  return NextResponse.json({
    status: 200,
    message: "success",
    payload: studentList,
  });
};
//Post method
export const POST = async (request) => {
  const { name, email } = await request.json();

  const newStudent = await prisma.tblStudent.create({
    data: {
      name,
      email,
    },
  });

  return NextResponse.json({
    status: 201,
    message: "success",
    payload: newStudent,
  });
};
