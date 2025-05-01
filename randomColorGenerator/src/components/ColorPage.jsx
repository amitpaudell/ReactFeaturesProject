import { useEffect, useState } from "react";

const ColorPage = ({ colorFormat }) => {
  const [randomColor, setRandomColor] = useState({});
  useEffect(() => {
    const firstNumber = Math.floor(Math.random() * 255);
    const secondNumber = Math.floor(Math.random() * 255);
    const thirdnumber = Math.floor(Math.random() * 255);
    console.log(firstNumber);
    console.log(secondNumber);
    console.log(thirdnumber);
  }, [colorFormat]);
  return (
    <div>
      <h1 className="text-7xl text-center font-bold">{colorFormat} Color</h1>
      {/* <p>
        rgb{randomColor.firstNumber}, {randomColor.secondNumber}, {randomColor.thirdNumber}
      </p> */}
    </div>
  );
};

export default ColorPage;
