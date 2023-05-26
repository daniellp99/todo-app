import { prisma } from "@/db";
import { TodoRequestValidator } from "@/utils/schemas/todo";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const res = await request.json();
  const data = TodoRequestValidator.safeParse(res);
  if (!data.success) {
    return NextResponse.json(data.error.format()._errors, { status: 422 });
  }
  const { title, complete } = data.data;

  const todo = await prisma.todo.create({
    data: {
      title,
      complete,
    },
  });

  return NextResponse.json({ todo });
}
