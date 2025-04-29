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
      Q: "Accordian as musical instrument?",
      A: `The accordion is a portable, box-shaped musical instrument that produces sound by pushing air through reeds using a bellows. It has a keyboard or buttons on one side (right hand) for playing melodies and bass buttons on the other (left hand) for chords and accompaniment. Sound is created as the bellows are expanded or compressed while pressing keys or buttons. It’s commonly used in folk, classical, and popular music around the world.`,
    },
    {
      Q: "Can I create an accordion component with different framework??",
      A: `Yes, you can create an accordion component using various frameworks like React, Vue.js, Angular, Svelte, or even plain HTML/CSS with JavaScript. Each framework offers different tools for managing state and toggling visibility. Libraries like Bootstrap or Material UI provide pre-built accordion components for faster development. These components can be customized in style and behavior to fit your needs. The flexibility of modern frameworks makes implementing accordions both easy and efficient. `,
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
