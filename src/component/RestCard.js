import { Link } from "react-router";

export default function Restcard({ restInfo }) {
  return (
    <Link to={"/city/delhi/"+restInfo?.info?.id}>
    <div className="w-60 ml-10 rounded-xl overflow-hidden shadow-md bg-white hover:scale-105 transition-transform">
      <img
        className="w-full h-40 object-cover"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/" +
          restInfo.info.cloudinaryImageId
        }
        alt={restInfo.info.name}
      />
      <div className="p-4">
        <h2 className="text-lg font-bold">{restInfo.info.name}</h2>
        <p className="text-sm text-gray-600">
          {restInfo.info.cuisines?.join(", ")}
        </p>

        {/* Rating number with star in green circle */}
        <div className="flex items-center text-sm font-medium mt-1 text-gray-800">
          {restInfo.info.avgRating}
          <div className="ml-1 w-5 h-5 rounded-full bg-green-600 flex items-center justify-center text-white">
            <svg
              className="w-3.5 h-3.5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 
                3.967a1 1 0 00.95.69h4.178c.969 
                0 1.371 1.24.588 1.81l-3.385 
                2.46a1 1 0 00-.364 1.118l1.286 
                3.966c.3.922-.755 1.688-1.54 
                1.118l-3.385-2.46a1 1 0 00-1.175 
                0l-3.385 2.46c-.784.57-1.838-.196-1.539-1.118l1.285-3.966a1 
                1 0 00-.364-1.118L2.049 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 
                1 0 00.95-.69l1.286-3.967z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}


