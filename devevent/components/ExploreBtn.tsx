"use client"; //user event run it on client

const ExploreBtn = () => {
  return (
    <button
      type="button"
      id="explore-btn"
      className="mt-7 border border-gray-300 px-4 py-2 rounded-md hover:bg-blue-500 transition"
      onClick={() => {
        console.log("explore btn clicked");
      }}
    >
      <a href="#event">Explore Events</a>
    </button>
  );
};

export default ExploreBtn;
