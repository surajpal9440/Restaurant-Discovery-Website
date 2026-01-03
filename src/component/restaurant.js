
import { useEffect } from "react";
import { useState } from "react";
import Restcard from "./RestCard";
import Shimmer from "./Shimmer";

export default function Restaurants(){

// proxy url:- "https://cors-anywhere.herokuapp.com/";
    const [RestData,setRestData]=useState([]);
    
    useEffect(()=>{
        async function fetchData(){
//ye pehle proxy server ko call krenge and vo data leke ayega cross-origin ko allow krega phir browser me show hoyega    
            const proxyServer="https://cors-anywhere.herokuapp.com/"
            const swiggyAPI="https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5211&lng=73.8502&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            const response=await fetch(proxyServer+swiggyAPI)
            const data=await response.json();
            //ye data se info milegi
            setRestData(data?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        fetchData();
    },[])
    console.log(RestData)
   //shimmer Effect
    if(RestData.length==0)
        return <Shimmer></Shimmer>
    
    return(
        <div className="flex justify-center  mt-30 flex-wrap w-[80%] mx-auto gap-5">
            {
                    RestData.map((restInfo)=><Restcard key={restInfo.info.id} restInfo={restInfo}></Restcard>)
            }

        </div>
    )
}