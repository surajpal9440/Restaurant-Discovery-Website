// Shimmer.js
export default function Shimmer() {
  const cards = new Array(8).fill(0);

  return (
    <div className="flex justify-center mt-10 flex-wrap w-[80%] mx-auto gap-5">
      {cards.map((_, index) => (
        <div
          key={index}
          className="w-60 h-64 bg-gray-200 rounded-xl animate-pulse"
        >
          <div className="h-40 bg-gray-300 rounded-t-xl"></div>
          <div className="p-4 space-y-2">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-3 bg-gray-300 rounded w-1/2"></div>
            <div className="h-3 bg-gray-300 rounded w-1/3 mt-2"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
