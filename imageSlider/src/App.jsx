import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { GoDot } from "react-icons/go";
function App() {
  return (
    <>
      <h1 className="text-4xl text-center">Image Slider</h1>

      <div className="h-70 w-70 bg-yellow-500 ">
        <FaArrowAltCircleLeft />
        <FaArrowCircleRight />
      </div>

      <GoDot />
    </>
  );
}

export default App;
