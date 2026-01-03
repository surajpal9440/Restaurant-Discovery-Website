
// 3 div banana hai header me

import { Link } from "react-router";

//1 div swigg logo ad baaki chize
export default function Header(){
    return(
        <>
        <header className="bg-[#ff5200] font-serif">
        <div className="flex justify-between container mx-auto py-7">  
        <div className="mr-5">
            <img className="w-40 h-12" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"></img>
        </div>
        <div className="font-serif text-white font-bold text-base flex gap-5 items-center ml-4">
            <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Coperate</a>
            <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">Partner with us</a>
            <a className=" border border-white px-2 py-3 rounded-2xl" href="">Get the App</a>
            <a className="border border-black bg-black rounded-2xl p-2" href="">Sign in</a>
        </div>
        </div>

        <div className="pt-16 pb-8 relative">
            <img  className="h-110 w-60 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
            <img className="h-110 w-60 top0 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
            <div className="max-w-[60%] text-center text-5xl text-white container mx-auto z-10">
                Order Food and Groceries.Discover Best Restuarants.Swiggy it.!
            </div>
            <div className="max-w-[70%] container mx-auto flex gap-5 justify-center mt-20">
                <input className="bg-white max-w-[70%] rounded-2xl p-2 text-1xl z-5" placeholder="Pune,India"></input>
                <input className="bg-white max-w-[70%] rounded-2xl p-2 text-1xl z-5" placeholder="Search for restaurant,item or more"></input>
            </div>
        </div>

        <div className="max-w-[80%] container mx-auto flex">
           <Link to="/restaurants">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"></img>
             </Link>
            <a target="_blank" href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"></img>
            </a>
            <a target="_blank" href="https://www.swiggy.com/dineout">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"></img>
            </a>

        </div>
        </header>
        </>
    )
}