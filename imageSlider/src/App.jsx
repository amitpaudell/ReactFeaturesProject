import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { GoDot } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
import data from "./data/data";
import { useState } from "react";

function App() {
  const [index, setIndex] = useState(1);
  function handleBackwardClick() {
    setIndex(index - 1);
    if (index == 1) {
      setIndex(data.length);
    }
  }
  function handleForwardClick() {
    setIndex(index + 1);
    if (index == data.length) {
      setIndex(1);
    }
  }

  return (
    <>
      <h1 className="text-4xl text-center mb-9">Image Slider</h1>

      <div className="relative h-50 w-50 bg-yellow-500 mx-auto mt-4">
        {/* Arrows (one set only) */}
        <FaArrowAltCircleLeft onClick={handleBackwardClick} className="z-1 absolute left-2 top-[50%] text-white text-2xl cursor-pointer" />
        <FaArrowCircleRight onClick={handleForwardClick} className="z-1 absolute right-2 top-[50%] text-white text-2xl cursor-pointer" />

        {/* Dots container */}
        <div className="">
          {data.map((item) => (
            <div key={item.id} className=" w-full h-full relative ">
              {item.id == index ? <img src={item.id == index ? item.img : null} alt="" className="z-0 w-full h-full object-cover" /> : null}
              {/* <img src={item.id == index ? item.img : null} alt="" className="z-0 w-full h-full object-cover" /> */}dasda
              <GoDotFill className={`z-20 text-xl mx-2 absolute bottom-0 left-[50%] transform -translate-x-[50%] ${index == item.id ? "text-white" : "text-gray-400"}`} />
            </div>
          ))}
        </div>
      </div>

      {/* <div className="border-1 relative">
        <img src={data[0].img} alt="" className=" w-20 h-20" />
        <h1 className="absolute bottom-0">hello</h1>
      </div> */}
    </>
  );
}

export default App;
