import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("bg-white");

  const changeColor = () => {
    const colors = [
      "bg-red-400",
      "bg-blue-400",
      "bg-green-400",
      "bg-yellow-400",
      "bg-purple-400",
      "bg-pink-400",
      "bg-indigo-400",
      "bg-teal-400",
    ];

    const randomIndex = Math.floor(Math.random() * colors.length);
    setColor(colors[randomIndex]);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen transition-all duration-500 ${color}`}
    >
      <h1 className="text-4xl font-bold mb-6">
        Color Changer
      </h1>

      <button
        onClick={changeColor}
        className="px-6 py-3 bg-black text-white rounded-lg"
      >
        Change Color
      </button>
    </div>
  );
};

export default App;