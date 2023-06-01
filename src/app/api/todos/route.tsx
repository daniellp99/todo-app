import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await prisma.todo.findMany();

  return NextResponse.json({ data });
}
