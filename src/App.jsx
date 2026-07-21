import { useState } from "react";

const App = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(120); 

  const toggleLike = () => {
    if (liked) {
      setLikeCount((prev) => prev - 1);
    } else {
      setLikeCount((prev) => prev + 1);
    }
    setLiked((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-72 text-center">
        <h1 className="text-xl font-semibold text-gray-800 mb-6">
          Like this post?
        </h1>

        <button
          onClick={toggleLike}
          className="flex items-center justify-center gap-2 mx-auto px-5 py-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
        >
          <span
            className={`text-2xl transition-transform duration-200 ${
              liked ? "scale-125" : "scale-100"
            }`}
          >
            {liked ? "❤️" : "🤍"}
          </span>

          <span
            className={`font-medium ${
              liked ? "text-red-500" : "text-gray-600"
            }`}
          >
            {likeCount}
          </span>
        </button>
      </div>
    </div>
  );
};

export default App;