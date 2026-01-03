import { imageGridCards } from "../Utils/foodData"
import FoodCard from "./foodCard"

export default function FoodOption(){
    return(
        <>
        <div className="w-[80%] container mx-auto flex flex-wrap items-center justify-center">
            {                                                               //as a props send kiya foodcard file me
                imageGridCards.map((foodData)=><FoodCard key={foodData.id} foodData={foodData}></FoodCard>)
            }
        </div>
        </>
    )
}