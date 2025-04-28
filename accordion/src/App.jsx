import { useState } from "react";
import Card from "./components/Card";

function App() {
  const titles = [
    {
      Q: "What are accordion components?",
      A: `Accordion components are user interface elements used for
        organizing and presenting content in a collapsible manner. They
        typically consist of a header, content, and an expand/collapse
        action`,
    },
    {
      Q: "What are accordion components2?",
      A: `Accordion components are user interface elements used for
        organizing and presenting content in a collapsible manner. They
        typically consist of a header, content, and an expand/collapse
        action`,
    },
    {
      Q: "What are accordion components3?",
      A: `Accordion components are user interface elements used for
        organizing and presenting content in a collapsible manner. They
        typically consist of a header, content, and an expand/collapse
        action`,
    },
    {
      Q: "What are accordion components4?",
      A: `Accordion components are user interface elements used for
        organizing and presenting content in a collapsible manner. They
        typically consist of a header, content, and an expand/collapse
        action `,
    },
  ];
  const [condition, setCondition] = useState(null);

  function handleClick(value) {
    setCondition(value === condition ? null : value);
  }
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-3">
      <div className="h-19 w-[20%] text-amber-50  text-2xl text-center  font-bold border-2 p-6 bg-[#644100]">Enable Multi Selection</div>
      {titles.map((title) => {
        return <Card key={title.Q} title={title.Q} ans={title.A} handleClick={() => handleClick(title.Q)} isOpen={condition === title.Q}></Card>;
      })}
    </div>
  );
}

export default App;
