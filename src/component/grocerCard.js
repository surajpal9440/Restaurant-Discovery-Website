export default function GroceryCard({ grocerydata }) {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-w-[180px] m-2 p-2 bg-white rounded-lg shadow-md flex-shrink-0">
                <a href={grocerydata?.action?.link}>
                    <img
                        className="w-[160px] h-[160px] object-contain mb-2"
                        src={"https://media-assets.swiggy.com/swiggy/image/upload/" + grocerydata?.imageId}
                        alt={grocerydata?.name || "food image"}
                    />
                </a>
                {/* vegetables ke naam show karane ke liye */}
                <h2 className="text-center text-sm font-medium">{grocerydata?.action?.text}</h2>
            </div>
        </>
    );
}

