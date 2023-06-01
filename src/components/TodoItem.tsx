"use client";

import { TodoType } from "@/utils/schemas/todo";
import React from "react";
interface TodoItemsProps extends TodoType {
  complete: boolean | boolean;
  toggleTodo: (id: string, complete: boolean) => void;
}

function TodoItem({ id, title, complete, toggleTodo }: TodoItemsProps) {
  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label htmlFor={id} className="peer-checked:line-through peer-checked:text-slate-500">
        {title}
      </label>
    </li>
  );
}

export default TodoItem;
