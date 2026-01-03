import { groceryimageGrids } from "../Utils/grocerydata";
import GroceryCard from "./grocerCard";

export default function GroceryOption() {
    return (
        <>
            <div className="mt-20 w-[80%] container mx-auto px-4">
                <h1 className="text-xl font-bold mb-4">Shop Groceries on Instamart</h1>
                
                {/* Horizontal scroll container */}
                <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                    {
                        groceryimageGrids.map((grocerydata) => (
                            <GroceryCard key={grocerydata.id} grocerydata={grocerydata} />
                        ))
                    }
                </div>
            </div>
        </>
    );
}
