import { useParams } from "react-router-dom";
import { Shimmer } from "./Shimmer";
import { useRestaurantMenu } from "./CustomHook/useRestaurantMenu";
import { RestaurantCategory } from "./RestaurantCategory";

import {BsStar } from "react-icons/bs";
import {MdOutlineFastfood, MdDeliveryDining } from "react-icons/md";
import {FaIndianRupeeSign } from "react-icons/fa6";
import {GrLocation } from "react-icons/gr";
export const RestaurantMenu = () => {
  const { id } = useParams();
  let { restaurantMenu, menu, category } = useRestaurantMenu(id);

  return menu != undefined && Object.keys(menu).length === 0 ? (
    <Shimmer />
  ) : (
    <div className="text-center flex justify-center px-10 min-h-[490] pb-4 bg-white">
      <div >
        <div className="hidden  text-black mt-7 ml-56 w-[800] xl:flex justify-between min-h-[100] border-dotted border-b-4 pb-6">
          <div className="flex-col">
            <h2 className="font-semibold font-mono text-2xl mr-60 mt-2">{restaurantMenu?.name}</h2>
            <h2 className="flex mt-2"> <MdOutlineFastfood className="mt-1 ml-3 mr-1  "/> {restaurantMenu?.cuisines.join(", ")}</h2>
            <h2 className="flex mb-2"> 
              <GrLocation className="mt-1 ml-[10] mr-1"/>
              {restaurantMenu?.locality + ",     "}
              {restaurantMenu?.areaName},{" "}
              {restaurantMenu?.city} - 
              {" " + restaurantMenu?.sla?.lastMileTravelString}
            </h2>
          </div>
         
          <div className="mt-3  border-slate-700 rounded-xl border px-4 w-24 mr-3">
          <h3 className="font-bold text-lg mt-[5] text-green-600 flex pl-2 border-b-2 pb-1 border-black"> <BsStar className="mr-1 mt-1 text-green-600" />{restaurantMenu?.avgRating} </h3>
          <h3 className="font-semibold text-xs flex mt-2"> {restaurantMenu?.totalRatingsString} </h3>
          </div>
        </div>
        <div className=" hidden xl:flex ml-[232] mt-3 mb-2 font-bold text-black text-lg font-sans">
          <h2 className="flex"><MdDeliveryDining className="mt-[6] mr-[6] "/>{restaurantMenu?.sla?.deliveryTime} mins </h2>
         <h3 className=" flex font-bold text-lg ml-4">
       <FaIndianRupeeSign className="mt-[6] h-[14] mr-[6]"/>{restaurantMenu?.costForTwo / 100} {" for Two"}
          </h3>
        </div>
        
        {category && Object.values(category).map((category) => (
          <RestaurantCategory
            key={category?.card?.card.title}
            data={category.card.card}
          />
        ))}
      </div>
    </div>
  );
};
