export default function FoodCard({ foodData }) {
    return (
        <>
        <div className="mt-10">
        <a href={foodData?.action?.link}>
        <img  className="w-42 h-50"
        
            src={"https://media-assets.swiggy.com/swiggy/image/upload/" + foodData?.imageId}
            alt={foodData?.name || "food image"}/>
           </a>
           </div>
        </>
    );
}
