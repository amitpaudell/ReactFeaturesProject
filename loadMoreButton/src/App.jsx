import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [count, setCount] = useState(0);

  function handleCount() {
    setCount((prevCount) => prevCount + 1);
  }

  useEffect(() => {
    async function getProducts() {
      const res = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${
          count == 0 ? 0 : count * 10
        }`
      );
      const data = await res.json();
      if (data && data.products && data.products.length) {
        setProducts((prevData) => [...prevData, ...data.products]);

        setLoading(true);
      }
    }
    getProducts();
  }, [count]);
  return (
    <div>
      <div>
        <h1 className="text-3xl text-center">Product Image</h1>
      </div>
      <div className="grid grid-cols-4">
        {loading && products.length > 0
          ? products.map((product) => {
              return (
                <div
                  key={product.id}
                  className="flex flex-col justify-center items-center border m-2"
                >
                  <img src={product.thumbnail} alt="" className="w-50 h-50" />
                  <p className="text-center">{product.title}</p>
                </div>
              );
            })
          : null}
      </div>

      <div className="flex justify-center my-4">
        <button
          onClick={handleCount}
          className="bg-purple-500 text-white py-2 px-4 rounded-md "
        >
          Load more
        </button>
      </div>
    </div>
  );
}

export default App;
