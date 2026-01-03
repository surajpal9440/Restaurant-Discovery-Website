export default function DineCard({ RestData }) {
    const images = RestData?.info?.mediaFiles || [];

    return (
        <>
            <div className="min-w-[240px] bg-white rounded-lg shadow-md p-4 flex-shrink-0">
               {/* jb photo pe click kru to dusre page me leke jaye */}
                <a target="_blank" href={RestData.cta.link}>
                {/* All images for the restaurant */}
                <div className="flex overflow-x-auto space-x-2 mb-2 bg-gradient-to-b-black">
                    {
                    images.map((img, index) => (
                        <img
                            key={index}
                            src={"https://media-assets.swiggy.com/swiggy/image/upload/" + img.url}
                            alt={RestData?.info?.name + " image " + (index + 1)}
                            className="w-40 h-28 object-cover rounded-md flex-shrink-0"
                        />
                    ))}
                </div>

                {/* Restaurant name and rating */}
                <p className="font-semibold text-base">{RestData?.info?.name}</p>
                <p className="text-sm text-gray-600">
                    Rating: {RestData?.info?.rating?.value || "No Rating"}
                </p>
                </a>
            </div>
        </>
    );
}
