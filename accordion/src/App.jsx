import { useState } from "react";
import Card from "./components/Card";

function App() {
  const titles = [
    {
      Q: "What are accordion components?",
      A: `Accordion components are UI elements used to show and hide sections of related content in a compact way. They consist of a list of items that can be individually expanded or collapsed to reveal or hide more information.`,
    },
    {
      Q: "What are they used?",
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
      <button className="h-19 w-[20%] text-amber-50  tex  t-2xl text-center  font-bold border-2 p-6 bg-[#644100]">Enable Multi Selection</button>
      {titles.map((title) => {
        return <Card key={title.Q} title={title.Q} ans={title.A} handleClick={() => handleClick(title.Q)} isOpen={condition === title.Q}></Card>;
      })}
    </div>
  );
}

export default App;
