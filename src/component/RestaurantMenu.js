import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MenuCard from "./MenuCard";



export default function RestaurantMenu(){
   
    let {id} = useParams();
    console.log(id);

    const [RestData, setRestData] = useState([]);

useEffect(() => {
  async function fetchData() {
    const proxyServer = "https://cors-anywhere.herokuapp.com/";
    const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;

    try {
      const response = await fetch(proxyServer + swiggyAPI);
      const data = await response.json();

      const tempData =data?.data?.cards[5]?. groupedCard?.cardGroupMap?.REGULAR?.cards;

        //if cards ke card ke ander tiltle present hua tb hi usse lena hai 
      if (tempData) {
        const filterData = tempData.filter(
          (item) => 'title' in item?.card?.card
        );
        setRestData(filterData);
      } else {
        console.warn("No menu data found.");
        setRestData([]);
      }
    } catch (error) {
      console.error("Error fetching restaurant menu:", error);
    }
  }

  fetchData();
}, [id]);

console.log(RestData);

    return(
        <div className="w-[80%] mx-auto mt-20">
          {                                                     //props pass krenge menuitems se
            RestData.map((menuItems)=><MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card?.itemCards}></MenuCard>)
          }
        </div>
    )

}