import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { GoDot } from "react-icons/go";
import data from "./data/data";

function App() {
  return (
    <>
      <h1 className="text-4xl text-center">Image Slider</h1>

      <div className="relative h-50 w-50 bg-yellow-500 mx-auto mt-4">
        {/* Arrows (one set only) */}
        <FaArrowAltCircleLeft className="absolute left-2 top-[50%] text-white text-2xl cursor-pointer" />
        <FaArrowCircleRight className="absolute right-2 top-[50%] text-white text-2xl cursor-pointer" />

        {/* Dots container */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          {data.map((item) => (
            <GoDot key={item.id} className="text-xl text-white mx-2" />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
