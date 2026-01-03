//recommended wale ko bana rhe hai isme 

export default function RestInfo({ restData }) {
  return (
    <div className="flex w-full justify-between border-b py-4">
      <div className="w-[70%]">
        <p className="font-semibold">{restData?.name}</p>
        <p>₹{(restData?.price || restData?.defaultPrice) / 100}</p>
        <span>{restData?.ratings?.aggregatedRating?.rating}</span>
        <span> ({restData?.ratings?.aggregatedRating?.ratingCountV2})</span>
        <p>{restData?.description}</p>
      </div>
      <div className="w-[20%] relative">
        {restData?.imageId && (
          <img
            className="w-full h-36 object-cover rounded"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/${restData.imageId}`}
            alt={restData?.name}
          />
        )}
        <button className="absolute bottom-0 left-0 text-green-600 px-4 py-2 bg-white rounded">
          Add
        </button>
      </div>
    </div>
  );
}
