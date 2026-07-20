import { useState } from "react"

const App = () => {

  const [count, setcount] = useState(0);

  const increment = () => {
    setcount(count + 1);
  }

  const decrement = () => {
    setcount(count - 1);
  }

  const reset = () => {
    setcount(0);
  }

  return (
  <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <h1 className="text-4xl font-bold">{count}</h1>
   
        <div className="flex gap-3">
          <button
            onClick={decrement}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Decrement
          </button>
   
          <button
            onClick={reset}
            className="px-4 py-2 bg-gray-500 text-white rounded"
          >
            Reset
          </button>
   
          <button
            onClick={increment}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Increment
          </button>
        </div>
      </div>
  );
}


export default App