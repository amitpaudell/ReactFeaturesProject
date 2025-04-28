import Card from "./components/Card";

function App() {
  const titles = ["What are accordion components?", "What are they used for?", "Accordion as a musical instrument", "Can I create an accordion component with a different framework?"];
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-3">
      <div className="h-19 w-[20%] text-amber-50  text-2xl text-center  font-bold border-2 p-6 bg-[#644100]">Enable Multi Selection</div>
      {titles.map((title) => {
        return <Card key={title} title={title}></Card>;
      })}
    </div>
  );
}

export default App;
