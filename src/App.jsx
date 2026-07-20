import { useState } from "react"

const App = () => {

  const [darkMode, setdarkMode] = useState(false);

  const chageThemes = () => {
    setdarkMode(!darkMode);
  }

  return( <div className={`flex flex-col items-center justify-center min-h-screen transition-all duration-300 ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
    <h1 className="text-4xl font-bold mb-6">
      {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </h1>

    <button
        onClick={chageThemes}
        className={`px-6 py-3 rounded-lg font-semibold transition ${
          darkMode
            ? "bg-yellow-400 text-black hover:bg-yellow-500"
            : "bg-gray-800 text-white hover:bg-gray-900"
        }`}> 
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>

  </div>
  )
 
}


export default App