import { useState } from "react";

function App() {
  const [colorType, setColorType] = useState("Hex");
  const [hexColor, setHexColor] = useState("#ffffff");
  const [rgbColor, setRgbColor] = useState("rgb(255,255,255)");

  function hexrandomColor() {
    const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      let randomNumber = Math.floor(Math.random() * number.length);
      hex += number[randomNumber];
    }
    setHexColor(hex);
  }

  function rgbrandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const rgb = `rgb(${r},${g},${b})`;
    setRgbColor(rgb);
  }

  return (
    <div className="h-screen flex flex-col">
      <div className="flex justify-center">
        <button className="bg-blue-700 text-amber-100 p-5 text-2xl m-5 cursor-pointer" onClick={() => setColorType("Hex")}>
          Create Hex Color
        </button>
        <button className="bg-blue-700 text-amber-100 p-5 text-2xl m-5 cursor-pointer" onClick={() => setColorType("Rgb")}>
          Create RGB Color
        </button>
        <button className="bg-blue-700 text-amber-100 p-5 text-2xl m-5 cursor-pointer" onClick={hexrandomColor}>
          Generate Random Color
        </button>
      </div>
      <h1 className="text-7xl text-center font-bold">{colorType} Color</h1>
    </div>
  );
}

export default App;
