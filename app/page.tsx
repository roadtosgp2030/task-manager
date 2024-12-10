"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

export default function Home() {
  return (
    <main className="w-[700px] bg-slate-200 pt-8 px-8 pb-12 text-gray-950 rounded-xl shadow-xl shadow-slate-600">
      <h1 className="text-center mb-4 text-2xl font-bold p-4 uppercase">Task Manager</h1>
      <div className="w-full h-[400px] mx-auto flex flex-col overflow-hidden relative border rounded-lg">
        {/* Input out */}
        <ul className="*:p-3 *:border *:rounded-lg *:my-3 *:select-none px-4 overflow-auto scrollbar bg-slate-300 *:border-slate-500">
          <li onClick={() => console.log(1)}>Task1 Task1 Task1 Task1 Task1 Task1 Task1 Task1 Task1 Task1 Task1 Task1 Task1 Task1 Task1 Task1 Task1 Task1</li>
          <li>Task1</li>
          <li>Task1</li>
          <li>Task1</li>
          <li>Task1</li>
          <li>Task1</li>
          <li>Task1</li>
          <li>Task1</li>
          <li>Task1</li>
          <li>Task1</li>
          <li>Task1</li>
          <li>Task1</li>
          <li>Task1</li>
          <li>Task1</li>
        </ul>

        {/* Input in */}
        <form className="sticky -bottom-4 px-4 left-0 right-0 flex gap-4">
          <Input label="Task" type="text" fullWidth size="sm"/>
          <Button type="submit" color="primary" className="h-full">Submit</Button>
        </form>
      </div>
    </main>
  );
}
