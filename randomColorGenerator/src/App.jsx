import "./App.css";
import ColorPage from "./components/ColorPage";
function App() {
  return (
    <div className="flex justify-center">
      <button className="bg-blue-700 text-amber-100 p-5 text-2xl m-5 cursor-pointer">Create Hex Color</button>
      <button className="bg-blue-700 text-amber-100 p-5 text-2xl m-5 cursor-pointer">Create RGB Color</button>
      <button className="bg-blue-700 text-amber-100 p-5 text-2xl m-5 cursor-pointer">Generate Random Color</button>

      <ColorPage></ColorPage>
    </div>
  );
}

export default App;
