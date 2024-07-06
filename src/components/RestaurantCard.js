import { BsFillStarFill } from "react-icons/bs";
import { FaWalking } from "react-icons/fa";


export const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  costForTwo,
  deliveryTime,
  sla,
  avgRating

}, ) => {

  return (
    <div className="m-4 min-h-[370px]  p-4 w-[300px] shadow-lg text-red-800 bg-white rounded-lg hover:shadow-orange-600  transition ease-in-out delay-50 hover:scale-105 duration-200 ">
      <img
        className="rounded-lg w-full h-40 object-cover"
       
        src={ "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
        cloudinaryImageId}
        alt="logoRes"
      />
      <h2 className="font-bold pt-2 pb-1 text-xl line-clamp-1 ">{name}</h2>
      <h3 className="mb-4 tracking-wide truncate">{cuisines.join(", ")}</h3>
      <div className="flex justify-between mb-2">
      <h4
          style={
            avgRating < 4
              ? { backgroundColor: "#f7084e" }
              : { backgroundColor: "#00ad1d" }
          } 
          className="p-2 mb-4 text-white font-bold rounded-md flex items-center gap-2"
        > 
        
          {avgRating ? avgRating : "--"}
          <BsFillStarFill  />
        </h4>
      <h4 className="mt-2 ml-5 font-bold"><FaWalking className="ml-3"/>{sla.lastMileTravelString} </h4>
      <h4 className="mt-2  font-bold"> {costForTwo} </h4>

      </div>
      <span className="pt-3 text-base font-bold"> {sla.deliveryTime} </span><span className="pt-3 text-base">minutes till delivery</span>
    </div>
  );
};

export const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white ml-4 p-2 rounded-lg"> Promoted </label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};
