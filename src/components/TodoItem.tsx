import { TodoType } from "@/utils/schemas/todo";
import React from "react";

function TodoItem({ id, title, complete }: TodoType) {
  return (
    <li className="flex gap-1 items-center">
      <input id={id} type="checkbox" className="cursor-pointer peer" />
      <label htmlFor={id} className="peer-checked:line-through peer-checked:text-slate-500">
        {title}
      </label>
    </li>
  );
}

export default TodoItem;
