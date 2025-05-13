import data from "../data/data";

function App() {
  return (
    <div>
      <h1 className="text-3xl ">Load More Functionality</h1>

      <div className="grid grid-cols-4">
        {data.map((item) => {
          return (
            <div key={item.name} className="w-50 h-50 border p-4 m-2">
              <p>{item.name}</p>
              <img src={item.img} alt="" />
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-4">
        <button className="bg-black text-white px-4 py-2 rounded">Load More Button</button>
      </div>
    </div>
  );
}

export default App;
