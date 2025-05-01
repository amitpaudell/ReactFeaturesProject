import { useState } from "react";

function App() {
  const [colorType, setColorType] = useState("Hex");
  const [anyColor, setAnyColor] = useState("#ffffff");
  const [flag, setFlag] = useState(false);

  function hexrandomColor() {
    const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      let randomNumber = Math.floor(Math.random() * number.length);
      hex += number[randomNumber];
    }
    setAnyColor(hex);
  }

  function rgbrandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const rgb = `rgb(${r},${g},${b})`;
    setAnyColor(rgb);
  }

  function randomColor() {
    if (colorType == "Hex") {
      hexrandomColor();
    } else {
      rgbrandomColor();
    }
  }

  return (
    <div style={{ backgroundColor: `${anyColor}` }} className="h-screen flex flex-col">
      <div className="flex justify-center">
        <button className="bg-blue-700 text-amber-100 p-5 text-2xl m-5 cursor-pointer" onClick={() => setColorType("Hex")}>
          Create Hex Color
        </button>
        <button className="bg-blue-700 text-amber-100 p-5 text-2xl m-5 cursor-pointer" onClick={() => setColorType("Rgb")}>
          Create RGB Color
        </button>
        <button
          className="bg-blue-700 text-amber-100 p-5 text-2xl m-5 cursor-pointer"
          onClick={() => {
            randomColor();
          }}
        >
          Generate Random Color
        </button>
      </div>
      <h1 className="text-7xl text-center font-bold">
        {colorType} Color {anyColor}
      </h1>
    </div>
  );
}

export default App;
