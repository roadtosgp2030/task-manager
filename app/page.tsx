import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

export default function Home() {
  return (
    <main className="container mx-auto flex flex-col h-dvh overflow-hidden relative">
      {/* Input out */}
      <ul className="overflow-auto">
        <li className="h-24">Task1</li>
        <li className="h-24">Task1</li>
        <li className="h-24">Task1</li>
        <li className="h-24">Task1</li>
        <li className="h-24">Task1</li>
        <li className="h-24">Task1</li>
        <li className="h-24">Task1</li>
        <li className="h-24">Task1</li>
        <li className="h-24">Task1</li>
        <li className="h-24">Task1</li>
        <li className="h-24">Task1</li>
        <li className="h-24">Task1</li>
        <li className="h-24">Task1</li>
        <li className="h-24">Task1</li>
      </ul>

      {/* Input in */}
      <form className="fixed bottom-0">
        <Input label="Task" type="text" className="max-w-xs" size="sm"/>
        <Button type="submit" color="primary">Submit</Button>
      </form>
    </main>
  );
}
