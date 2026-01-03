import { dineoutRestaurants } from "../Utils/dinedata";
import DineCard from "./dinecard";
import GetApp from "./getapp";

export default function DineOption() {
    console.log("Dineout Data:", dineoutRestaurants); // ✅ For debugging

    return (
        <div>
            <p className="ml-15 mt-20 text-2xl font-bold">
                Discover best restaurants on Dineout
            </p>

            <div className="flex overflow-x-auto space-x-4 px-4 py-4">
                {
                    dineoutRestaurants && dineoutRestaurants.map((RestData) => (
                        <DineCard key={RestData.info.id} RestData={RestData} />
                    ))
                }
            </div>
            <GetApp></GetApp>
        </div>
    );
}
