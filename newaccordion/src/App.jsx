import { useState } from "react";
import data from "./data/data";

function App() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(currentid) {
    setSelected(currentid === selected ? null : currentid);
  }
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-3">
      <button className="h-19 w-[20%] text-amber-50  tex  t-2xl text-center  font-bold border-2 p-6 bg-[#644100]">Enable Multi Selection</button>
      <div className="flex flex-col justify-between h-auto w-[50%] text-amber-50  text-center  border-2  ">
        {data.map((item) => {
          return (
            <div key={item.id} onClick={() => handleSingleSelection(item.id)} className="bg-[#644100] p-10 flex flex-col justify-between text-2xl font-bold m-10">
              <div className="flex justify-between">
                <span>{item.Q}</span>
                <button>+</button>
              </div>

              <div className="mt-5">{selected === item.id ? item.A : null}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
