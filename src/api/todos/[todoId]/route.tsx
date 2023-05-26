import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { todoId: string } }) {
  const todoId = params.todoId;

  const todo = await prisma.todo.findUniqueOrThrow({ where: { id: todoId } });

  return NextResponse.json({ todo });
}
